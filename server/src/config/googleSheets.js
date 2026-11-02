const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

let sheetsInstance = null;
let authClient = null;

/**
 * Check if all required Google Sheets credentials are configured
 */
function isGoogleSheetsConfigured() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  return Boolean(
    email &&
    email.trim() !== '' &&
    email !== 'your-service-account@project-id.iam.gserviceaccount.com' &&
    privateKey &&
    privateKey.trim() !== '' &&
    !privateKey.includes('your_private_key') &&
    sheetId &&
    sheetId.trim() !== '' &&
    sheetId !== 'your_google_spreadsheet_id_here'
  );
}

/**
 * Initialize and return Google Sheets API v4 client instance
 */
function getGoogleSheetsClient() {
  if (sheetsInstance) {
    return { sheets: sheetsInstance, auth: authClient };
  }

  if (!isGoogleSheetsConfigured()) {
    return { sheets: null, auth: null };
  }

  try {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    // Replace literal escaped newlines with actual newline characters
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    if (privateKey) {
      privateKey = privateKey.replace(/\\n/g, '\n');
      // Strip surrounding quotes if present in env string
      if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
        privateKey = privateKey.slice(1, -1);
      }
    }

    authClient = new google.auth.JWT({
      email,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheetsInstance = google.sheets({ version: 'v4', auth: authClient });

    return { sheets: sheetsInstance, auth: authClient };
  } catch (error) {
    console.error('Failed to initialize Google Sheets client:', error.message);
    return { sheets: null, auth: null };
  }
}

module.exports = {
  isGoogleSheetsConfigured,
  getGoogleSheetsClient,
};
