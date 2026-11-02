const { SHEET_NAMES, appendToSheet } = require('../services/googleSheetsService');
const { generateSubmissionId, getCurrentTimestamp } = require('../utils/idGenerator');
const { isGoogleSheetsConfigured } = require('../config/googleSheets');

/**
 * Format array or string values into clean readable string for Google Sheets cells
 */
function formatList(val) {
  if (!val) return 'None specified';
  if (Array.isArray(val)) {
    const filtered = val.filter(Boolean);
    return filtered.length > 0 ? filtered.join(', ') : 'None specified';
  }
  const s = String(val).trim();
  return s || 'None specified';
}

/**
 * Helper to normalize Yes/No status for wedding service columns
 */
function formatYesNo(explicitVal, defaultKeywordMatches = [], sourceArrays = []) {
  if (explicitVal !== undefined && explicitVal !== null && explicitVal !== '') {
    const s = String(explicitVal).trim().toLowerCase();
    if (s === 'yes' || s === 'true' || s === 'required' || s === '1') return 'Yes';
    if (s === 'no' || s === 'false' || s === 'not required' || s === '0') return 'No';
  }
  for (const src of sourceArrays) {
    if (Array.isArray(src)) {
      if (src.some((item) => defaultKeywordMatches.some((k) => String(item).toLowerCase().includes(k.toLowerCase())))) {
        return 'Yes';
      }
    } else if (typeof src === 'string' && src.trim() !== '') {
      if (defaultKeywordMatches.some((k) => src.toLowerCase().includes(k.toLowerCase()))) {
        return 'Yes';
      }
    }
  }
  return 'No';
}

/**
 * Handle Event Management Enquiry Submissions
 * POST /api/enquiries/event
 * Target Worksheet: "Event Management" (11 Columns)
 */
async function handleEventEnquiry(req, res, next) {
  try {
    const {
      customerName,
      phone,
      email,
      eventCategory,
      eventType,
      eventDate,
      eventLocation,
      guestCount,
      servicesRequired,
      requiredServices,
      budget,
      packagePreference,
      additionalRequirements,
    } = req.body;

    const submissionId = generateSubmissionId('EVT');
    const submissionDate = getCurrentTimestamp();

    // Combine package preference if selected into additional requirements
    let combinedRequirements = additionalRequirements ? String(additionalRequirements).trim() : '';
    if (packagePreference && !combinedRequirements.includes(packagePreference)) {
      combinedRequirements = `[Selected Package: ${packagePreference}] ${combinedRequirements}`.trim();
    }

    const rowData = [
      submissionDate, // 1. Submission Date & Time
      customerName, // 2. Customer Name
      phone, // 3. Phone Number
      email, // 4. Email
      eventCategory || eventType || 'Corporate / Social Event', // 5. Event Type
      eventDate, // 6. Event Date
      eventLocation, // 7. Event Location
      guestCount ? String(guestCount) : 'Not specified', // 8. Number of Guests
      formatList(servicesRequired || requiredServices), // 9. Required Services
      budget ? String(budget).trim() : 'Flexible / To be discussed', // 10. Budget
      combinedRequirements || 'None', // 11. Additional Requirements
    ];

    const result = await appendToSheet(SHEET_NAMES.EVENT, rowData, submissionId);

    return res.status(201).json({
      success: true,
      message: 'Your event management enquiry has been submitted and recorded successfully.',
      submissionId,
      storage: result.storage,
      note: result.note,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Handle Catering Services Enquiry Submissions
 * POST /api/enquiries/catering
 * Target Worksheet: "Catering" (12 Columns)
 */
async function handleCateringEnquiry(req, res, next) {
  try {
    const {
      customerName,
      phone,
      email,
      eventType,
      cateringEventType,
      eventDate,
      eventLocation,
      guestCount,
      foodPreference,
      selectedPackage,
      budgetPerPlate,
      menuRequirements,
      additionalRequirements,
    } = req.body;

    const submissionId = generateSubmissionId('CAT');
    const submissionDate = getCurrentTimestamp();

    // Combine menu items into additional requirements if present
    let combinedRequirements = additionalRequirements ? String(additionalRequirements).trim() : '';
    if (menuRequirements && Array.isArray(menuRequirements) && menuRequirements.length > 0) {
      const items = menuRequirements.filter(Boolean).join('; ');
      combinedRequirements = combinedRequirements
        ? `${combinedRequirements} [Special Counters: ${items}]`
        : `[Special Counters: ${items}]`;
    }

    const rowData = [
      submissionDate, // 1. Submission Date & Time
      customerName, // 2. Customer Name
      phone, // 3. Phone Number
      email, // 4. Email
      cateringEventType || eventType || 'Wedding Ceremony', // 5. Catering Event Type
      eventDate, // 6. Event Date
      eventLocation, // 7. Event Location
      String(guestCount), // 8. Number of Guests
      foodPreference || 'Vegetarian and Non-Vegetarian', // 9. Food Preference (Veg / Non-Veg / Both)
      selectedPackage || 'Standard Package', // 10. Selected Package
      budgetPerPlate ? String(budgetPerPlate).trim() : 'Standard Menu Rates', // 11. Budget Per Plate
      combinedRequirements || 'None', // 12. Additional Requirements
    ];

    const result = await appendToSheet(SHEET_NAMES.CATERING, rowData, submissionId);

    return res.status(201).json({
      success: true,
      message: 'Your catering enquiry has been submitted and recorded successfully.',
      submissionId,
      storage: result.storage,
      note: result.note,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Handle Wedding Planner Enquiry Submissions
 * POST /api/enquiries/wedding
 * Target Worksheet: "Wedding Planner" (17 Columns)
 */
async function handleWeddingEnquiry(req, res, next) {
  try {
    const {
      customerName,
      phone,
      email,
      weddingDate,
      weddingVenueLocation,
      venuePreference,
      guestCount,
      totalWeddingBudget,
      estimatedBudget,
      venueBookingRequired,
      decorationRequired,
      bridalMakeupRequired,
      jewelleryRequired,
      weddingSareeRequired,
      photographyRequired,
      cateringRequired,
      entertainmentRequired,
      packageType,
      brideServices,
      groomServices,
      decorationRequirements,
      cateringRequirements,
      photographyRequirements,
      otherRequirements,
      additionalRequirements,
    } = req.body;

    const submissionId = generateSubmissionId('WED');
    const submissionDate = getCurrentTimestamp();

    // Check if "Complete Wedding Package" is chosen
    const isCompletePackage =
      packageType && packageType.toLowerCase().includes('complete wedding package');

    // Resolve the 8 individual service booleans cleanly
    const venueBooking = formatYesNo(
      venueBookingRequired,
      ['venue', 'palace', 'resort', 'hotel'],
      [venuePreference, isCompletePackage ? 'Yes' : '']
    );
    const decoration = formatYesNo(
      decorationRequired,
      ['mandap', 'decor', 'floral', 'stage', 'entrance'],
      [decorationRequirements, isCompletePackage ? 'Yes' : '']
    );
    const bridalMakeup = formatYesNo(
      bridalMakeupRequired,
      ['makeup', 'hair', 'airbrush', 'styling'],
      [brideServices, isCompletePackage ? 'Yes' : '']
    );
    const jewellery = formatYesNo(
      jewelleryRequired,
      ['jewel', 'ornament', 'heritage'],
      [brideServices, isCompletePackage ? 'Yes' : '']
    );
    const weddingSaree = formatYesNo(
      weddingSareeRequired,
      ['saree', 'lehenga', 'draping'],
      [brideServices, isCompletePackage ? 'Yes' : '']
    );
    const photography = formatYesNo(
      photographyRequired,
      ['photo', 'film', 'video', 'cinematic', 'candid', 'drone'],
      [photographyRequirements, isCompletePackage ? 'Yes' : '']
    );
    const catering = formatYesNo(
      cateringRequired,
      ['feast', 'catering', 'banquet', 'veg', 'non-veg'],
      [cateringRequirements, isCompletePackage ? 'Yes' : '']
    );
    const entertainment = formatYesNo(
      entertainmentRequired,
      ['band', 'music', 'dj', 'baraat', 'entertainment', 'singer'],
      [groomServices, isCompletePackage ? 'Yes' : '']
    );

    // Combine any package / service notes into Other Requirements
    let combinedOther = otherRequirements || additionalRequirements ? String(otherRequirements || additionalRequirements).trim() : '';
    if (packageType && !combinedOther.includes(packageType)) {
      combinedOther = `[Package: ${packageType}] ${combinedOther}`.trim();
    }

    const rowData = [
      submissionDate, // 1. Submission Date & Time
      customerName, // 2. Customer Name
      phone, // 3. Phone Number
      email, // 4. Email
      weddingDate, // 5. Wedding Date
      weddingVenueLocation || venuePreference || 'Not specified', // 6. Wedding Venue / Location
      String(guestCount), // 7. Number of Guests
      totalWeddingBudget || estimatedBudget || 'Flexible', // 8. Total Wedding Budget
      venueBooking, // 9. Venue Booking Required
      decoration, // 10. Decoration Required
      bridalMakeup, // 11. Bridal Makeup Required
      jewellery, // 12. Jewellery Required
      weddingSaree, // 13. Wedding Saree Required
      photography, // 14. Photography Required
      catering, // 15. Catering Required
      entertainment, // 16. Entertainment Required
      combinedOther || 'None', // 17. Other Requirements
    ];

    const result = await appendToSheet(SHEET_NAMES.WEDDING, rowData, submissionId);

    return res.status(201).json({
      success: true,
      message: 'Your wedding planner enquiry has been submitted and recorded successfully.',
      submissionId,
      storage: result.storage,
      note: result.note,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Handle Contact Us Enquiry Submissions
 * POST /api/enquiries/contact
 * Target Worksheet: "Contact Enquiries" (6 Columns)
 */
async function handleContactEnquiry(req, res, next) {
  try {
    const { customerName, phone, email, subject, message } = req.body;

    const submissionId = generateSubmissionId('CNT');
    const submissionDate = getCurrentTimestamp();

    const rowData = [
      submissionDate, // 1. Submission Date & Time
      customerName, // 2. Customer Name
      phone, // 3. Phone Number
      email, // 4. Email
      subject, // 5. Subject
      message, // 6. Message
    ];

    const result = await appendToSheet(SHEET_NAMES.CONTACT, rowData, submissionId);

    return res.status(201).json({
      success: true,
      message: 'Your message has been received. Our leadership team will contact you shortly.',
      submissionId,
      storage: result.storage,
      note: result.note,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Health check & diagnostic status
 * GET /api/health
 */
function getHealthStatus(req, res) {
  const gSheetsConfigured = isGoogleSheetsConfigured();
  const appsScriptConfigured = Boolean(
    process.env.GOOGLE_APPS_SCRIPT_URL &&
    process.env.GOOGLE_APPS_SCRIPT_URL.trim().startsWith('https://script.google.com/macros/s/')
  );

  return res.status(200).json({
    status: 'online',
    service: 'Royal Enterprise Backend API',
    spreadsheetName: 'Royal Enterprise - Customer Enquiries',
    timestamp: new Date().toISOString(),
    integration: {
      appsScriptConfigured,
      googleSheetsApiConfigured: gSheetsConfigured,
      activeMode: appsScriptConfigured
        ? 'Google Apps Script Web App'
        : gSheetsConfigured
        ? 'Google Sheets API v4'
        : 'Local JSON Backup (Offline/Dev)',
    },
  });
}

module.exports = {
  handleEventEnquiry,
  handleCateringEnquiry,
  handleWeddingEnquiry,
  handleContactEnquiry,
  getHealthStatus,
};
