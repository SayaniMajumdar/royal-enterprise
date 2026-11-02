const fs = require('fs');
const path = require('path');
const { getGoogleSheetsClient, isGoogleSheetsConfigured } = require('../config/googleSheets');
const { sanitizeCell } = require('../utils/sanitize');

/**
 * Target Google Spreadsheet name: "Royal Enterprise - Customer Enquiries"
 * Worksheet tab names strictly matching user requirements:
 */
const SHEET_NAMES = {
  EVENT: 'Event Management',
  CATERING: 'Catering',
  WEDDING: 'Wedding Planner',
  CONTACT: 'Contact Enquiries',
};

/**
 * Column Headers strictly matching the exact specification:
 * Sheet 1: Event Management (11 columns)
 * Sheet 2: Catering (12 columns)
 * Sheet 3: Wedding Planner (17 columns)
 * Sheet 4: Contact Enquiries (6 columns)
 */
const SHEET_HEADERS = {
  [SHEET_NAMES.EVENT]: [
    'Submission Date & Time',
    'Customer Name',
    'Phone Number',
    'Email',
    'Event Type',
    'Event Date',
    'Event Location',
    'Number of Guests',
    'Required Services',
    'Budget',
    'Additional Requirements',
  ],
  [SHEET_NAMES.CATERING]: [
    'Submission Date & Time',
    'Customer Name',
    'Phone Number',
    'Email',
    'Catering Event Type',
    'Event Date',
    'Event Location',
    'Number of Guests',
    'Food Preference (Veg / Non-Veg / Both)',
    'Selected Package',
    'Budget Per Plate',
    'Additional Requirements',
  ],
  [SHEET_NAMES.WEDDING]: [
    'Submission Date & Time',
    'Customer Name',
    'Phone Number',
    'Email',
    'Wedding Date',
    'Wedding Venue / Location',
    'Number of Guests',
    'Total Wedding Budget',
    'Venue Booking Required',
    'Decoration Required',
    'Bridal Makeup Required',
    'Jewellery Required',
    'Wedding Saree Required',
    'Photography Required',
    'Catering Required',
    'Entertainment Required',
    'Other Requirements',
  ],
  [SHEET_NAMES.CONTACT]: [
    'Submission Date & Time',
    'Customer Name',
    'Phone Number',
    'Email',
    'Subject',
    'Message',
  ],
};

const BACKUP_DIR = path.resolve(__dirname, '../../data');
const BACKUP_FILE = path.join(BACKUP_DIR, 'submissions_backup.json');

/**
 * Ensure backup directory and JSON file exist for local fallback persistence
 */
function ensureBackupStore() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }
  if (!fs.existsSync(BACKUP_FILE)) {
    fs.writeFileSync(BACKUP_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

/**
 * Save enquiry to local file backup when Google credentials/URLs are not yet configured
 */
function saveToLocalBackup(sheetName, rowData, submissionId) {
  try {
    ensureBackupStore();
    const raw = fs.readFileSync(BACKUP_FILE, 'utf-8');
    const records = JSON.parse(raw || '[]');

    const record = {
      submissionId,
      sheetName,
      timestamp: new Date().toISOString(),
      data: rowData,
    };

    records.push(record);
    fs.writeFileSync(BACKUP_FILE, JSON.stringify(records, null, 2), 'utf-8');
    console.log(`[Local Backup] Submission ${submissionId} saved to ${BACKUP_FILE}`);
    return true;
  } catch (err) {
    console.error('Failed to write to local backup storage:', err.message);
    return false;
  }
}

/**
 * Send enquiry row to Google Apps Script Web App via HTTP POST
 */
async function appendViaAppsScript(sheetName, sanitizedValues, submissionId) {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL ? process.env.GOOGLE_APPS_SCRIPT_URL.trim() : null;
  if (!url) return null;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'appendRow',
      sheetName,
      rowData: sanitizedValues,
      submissionId,
    }),
    redirect: 'follow',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Apps Script responded with HTTP ${response.status}: ${errorText}`);
  }

  const result = await response.json();
  return result;
}

let initializedSpreadsheetId = null;

/**
 * Ensure worksheet tabs and header rows exist when using Google Sheets API v4
 */
async function ensureSpreadsheetStructure(sheets, spreadsheetId) {
  if (initializedSpreadsheetId === spreadsheetId) {
    return;
  }

  try {
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const existingSheets = meta.data.sheets.map((s) => s.properties.title);

    // 1. Create missing sheets (tabs)
    const requiredSheets = Object.values(SHEET_NAMES);
    const missingSheets = requiredSheets.filter((name) => !existingSheets.includes(name));

    if (missingSheets.length > 0) {
      const addSheetRequests = missingSheets.map((title) => ({
        addSheet: { properties: { title } },
      }));

      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: { requests: addSheetRequests },
      });
      console.log(`[Google Sheets API] Created missing tabs: ${missingSheets.join(', ')}`);
    }

    // 2. Ensure each tab has the expected column headers in row 1
    for (const [sheetName, headers] of Object.entries(SHEET_HEADERS)) {
      const headerRange = `'${sheetName}'!A1:Z1`;
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: headerRange,
      });

      const rows = response.data.values;
      if (!rows || rows.length === 0 || rows[0].length === 0) {
        // Tab is empty; insert header row
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `'${sheetName}'!A1:${String.fromCharCode(64 + headers.length)}1`,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [headers],
          },
        });
        console.log(`[Google Sheets API] Initialized header row for '${sheetName}'`);
      }
    }

    initializedSpreadsheetId = spreadsheetId;
  } catch (error) {
    console.warn(`[Google Sheets API] Warning during structure verification: ${error.message}`);
  }
}

/**
 * Append row data to the target Google Sheet worksheet tab.
 * Supports:
 *  1. Google Apps Script Web App (GOOGLE_APPS_SCRIPT_URL)
 *  2. Google Sheets API v4 with Service Account (GOOGLE_SHEET_ID, etc.)
 *  3. Local file backup storage (fallback)
 *
 * @param {string} sheetName - Target worksheet name
 * @param {Array} rawRowValues - Array of column values in exact order
 * @param {string} submissionId - Generated unique tracking ID
 */
async function appendToSheet(sheetName, rawRowValues, submissionId) {
  // Sanitize all cell values against formula injection (CWE-1236)
  const sanitizedValues = rawRowValues.map((val) => sanitizeCell(val));

  // Option 1: Google Apps Script Web App
  if (process.env.GOOGLE_APPS_SCRIPT_URL && process.env.GOOGLE_APPS_SCRIPT_URL.trim() !== '') {
    try {
      const result = await appendViaAppsScript(sheetName, sanitizedValues, submissionId);
      console.log(`[Google Apps Script] Row appended to '${sheetName}' for submission ${submissionId}`);
      return {
        success: true,
        submissionId,
        storage: 'google_apps_script',
        details: result,
      };
    } catch (err) {
      console.error(`[Google Apps Script] Error: ${err.message}. Falling back to local backup.`);
      saveToLocalBackup(sheetName, sanitizedValues, submissionId);
      return {
        success: true,
        submissionId,
        storage: 'local_backup_fallback',
        warning: `Apps Script request failed (${err.message}). Data saved to local backup.`,
      };
    }
  }

  // Option 2: Google Sheets API v4 Direct JWT Service Account
  if (isGoogleSheetsConfigured()) {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const { sheets } = getGoogleSheetsClient();
    if (!sheets) {
      throw new Error('Google Sheets client could not be initialized. Please check credentials in server/.env.');
    }

    await ensureSpreadsheetStructure(sheets, sheetId);

    const range = `'${sheetName}'!A:Z`;
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [sanitizedValues],
      },
    });

    console.log(`[Google Sheets API] Row appended to '${sheetName}' for submission ${submissionId}`);
    return {
      success: true,
      submissionId,
      storage: 'google_sheets_api',
      updatedRange: appendResponse.data.updates ? appendResponse.data.updates.updatedRange : null,
    };
  }

  // Option 3: Local Storage Fallback (Dev / Pre-configuration mode)
  console.warn(
    `[Notice] No live Google Sheets configuration detected in server/.env. Saving submission ${submissionId} to local backup storage.`
  );
  saveToLocalBackup(sheetName, sanitizedValues, submissionId);
  return {
    success: true,
    submissionId,
    storage: 'local_backup',
    note: 'Saved to local backup. Configure GOOGLE_APPS_SCRIPT_URL or Google Service Account in server/.env to stream directly into Google Sheets.',
  };
}

module.exports = {
  SHEET_NAMES,
  SHEET_HEADERS,
  appendToSheet,
};
