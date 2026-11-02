/**
 * ============================================================================
 * ROYAL ENTERPRISE - GOOGLE APPS SCRIPT WEB APP INTEGRATION
 * ============================================================================
 * Spreadsheet Name: "Royal Enterprise - Customer Enquiries"
 *
 * This Google Apps Script connects the Royal Enterprise website directly to
 * your Google Spreadsheet. It automatically creates worksheet tabs, sets up
 * headers with royal luxury formatting, and appends incoming customer enquiries.
 *
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.new) and name the spreadsheet:
 *    "Royal Enterprise - Customer Enquiries"
 * 2. In Google Sheets, click: Extensions > Apps Script
 * 3. Delete any default code in Code.gs and paste this entire script.
 * 4. (Optional) Run the `setupSpreadsheet()` function from the toolbar to
 *    scaffold the 3 worksheet tabs with styled headers immediately.
 * 5. Click "Deploy" > "New deployment".
 * 6. Click the gear icon next to "Select type" and choose "Web app".
 * 7. Set:
 *    - Description: "Royal Enterprise Enquiry Web App"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone" (allows the Node.js backend to submit enquiries)
 * 8. Click "Deploy", authorize access with your Google Account.
 * 9. Copy the generated "Web App URL" (e.g., https://script.google.com/macros/s/.../exec).
 * 10. Paste this URL into your backend `server/.env` file:
 *     GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/..."
 * ============================================================================
 */

// Target Worksheet Tabs and Column Headers Definition
const SHEETS_CONFIG = {
  'Event Management': [
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
  'Catering': [
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
  'Wedding Planner': [
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
  'Contact Enquiries': [
    'Submission Date & Time',
    'Customer Name',
    'Phone Number',
    'Email',
    'Subject',
    'Message',
  ],
};

/**
 * Handle HTTP POST requests from the Royal Enterprise backend API
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent writes
  lock.tryLock(30000);

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({
        success: false,
        error: 'Missing request body or payload.',
      }, 400);
    }

    var payload = JSON.parse(e.postData.contents);
    var sheetName = payload.sheetName;
    var rowData = payload.rowData;
    var submissionId = payload.submissionId || 'N/A';

    if (!sheetName || !rowData || !Array.isArray(rowData)) {
      return jsonResponse({
        success: false,
        error: 'Invalid payload: sheetName and rowData (array) are required.',
      }, 400);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      return jsonResponse({
        success: false,
        error: 'No active Google Spreadsheet found. Ensure this script is bound to your spreadsheet.',
      }, 500);
    }

    // Get or create the worksheet tab
    var sheet = getOrCreateSheet(ss, sheetName);

    // Sanitize values against formula injection (CWE-1236)
    var sanitizedRow = rowData.map(function (val) {
      if (val === null || val === undefined) return '';
      var s = String(val).trim();
      var triggers = ['=', '+', '-', '@', '\t', '\r'];
      if (s.length > 0 && triggers.indexOf(s.charAt(0)) !== -1) {
        return "'" + s;
      }
      return s;
    });

    // Append new enquiry row
    sheet.appendRow(sanitizedRow);
    var lastRow = sheet.getLastRow();

    // Format data row: text wrapping and vertical alignment
    var rowRange = sheet.getRange(lastRow, 1, 1, sanitizedRow.length);
    rowRange.setVerticalAlignment('middle');
    rowRange.setWrap(true);

    return jsonResponse({
      success: true,
      message: 'Enquiry recorded in Google Sheets successfully.',
      submissionId: submissionId,
      sheetName: sheetName,
      rowNumber: lastRow,
      timestamp: new Date().toISOString(),
    }, 200);

  } catch (err) {
    return jsonResponse({
      success: false,
      error: err.toString(),
      message: 'Failed to record enquiry into Google Sheets.',
    }, 500);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle HTTP GET requests (Health check and status diagnostic)
 */
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetTitle = ss ? ss.getName() : 'Royal Enterprise - Customer Enquiries';

  return jsonResponse({
    status: 'online',
    service: 'Royal Enterprise Google Sheets API Web App',
    spreadsheetName: sheetTitle,
    availableWorksheets: Object.keys(SHEETS_CONFIG),
    timestamp: new Date().toISOString(),
  }, 200);
}

/**
 * Helper to get an existing worksheet tab or create it with styled headers
 */
function getOrCreateSheet(ss, sheetName) {
  var sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  // If sheet is empty or row 1 has no headers, initialize headers
  if (sheet.getLastRow() === 0) {
    var headers = SHEETS_CONFIG[sheetName];
    if (headers && headers.length > 0) {
      sheet.appendRow(headers);
      formatHeaderRow(sheet, headers.length);
    }
  }

  return sheet;
}

/**
 * Apply royal luxury styling to the header row (Deep Navy background + Gold text)
 */
function formatHeaderRow(sheet, numColumns) {
  var headerRange = sheet.getRange(1, 1, 1, numColumns);
  headerRange.setBackground('#0B132B'); // Royal Deep Navy
  headerRange.setFontColor('#D4AF37');  // Royal Gold
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);

  // Auto-fit column widths
  for (var col = 1; col <= numColumns; col++) {
    sheet.autoResizeColumn(col);
  }
}

/**
 * 1-Click Setup Helper:
 * Run this function from the Apps Script editor to immediately generate all 3
 * worksheet tabs with styled headers in your spreadsheet.
 */
function setupSpreadsheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    Logger.log('Error: Open this script from within your Google Spreadsheet (Extensions > Apps Script).');
    return;
  }

  for (var sheetName in SHEETS_CONFIG) {
    var sheet = getOrCreateSheet(ss, sheetName);
    var headers = SHEETS_CONFIG[sheetName];
    formatHeaderRow(sheet, headers.length);
    Logger.log('Initialized worksheet: ' + sheetName + ' (' + headers.length + ' columns)');
  }

  // Remove default "Sheet1" if empty and other tabs exist
  var defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && defaultSheet.getLastRow() === 0 && ss.getSheets().length > 1) {
    ss.deleteSheet(defaultSheet);
  }

  Logger.log('All Royal Enterprise worksheets successfully configured!');
}

/**
 * Test function to verify sheet writing directly in the Apps Script debugger
 */
function testEventEnquiry() {
  var testPayload = {
    postData: {
      contents: JSON.stringify({
        sheetName: 'Event Management',
        submissionId: 'EVT-TEST-001',
        rowData: [
          new Date().toISOString().replace('T', ' ').substring(0, 19),
          'Test Corporate Client',
          '+91 98765 43210',
          'corporate@example.com',
          'Corporate Events & Conferences',
          '2026-12-15',
          'Kolkata Convention Center',
          '500',
          'Concept & Stage Decor, Audiovisual & Technicals',
          '₹15,00,000 - ₹30,00,000',
          'Test submission via Apps Script setup function.',
        ],
      }),
    },
  };

  var response = doPost(testPayload);
  Logger.log('Test Event Result: ' + response.getContent());
}

/**
 * Format JSON responses for Apps Script ContentService
 */
function jsonResponse(data, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
