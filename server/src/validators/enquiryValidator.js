const { body, validationResult } = require('express-validator');

/**
 * Universal phone format validator: allows + country code, digits, spaces, dashes, parentheses, 7 to 20 chars
 */
const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/;

/**
 * Middleware to check validation results and return formatted error response with exact field messages
 */
function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorList = errors.array().map((err) => ({
      field: err.path || err.param,
      message: err.msg,
    }));

    // Build specific user-friendly error summary
    const detailedSummary = errorList.map((e) => e.message).join(' • ');

    return res.status(400).json({
      success: false,
      message: `Validation failed: ${detailedSummary}`,
      errors: errorList,
    });
  }
  next();
}

/**
 * Event Management Enquiry Validation Rules
 */
const eventValidationRules = [
  body('customerName')
    .trim()
    .notEmpty()
    .withMessage('Customer name / organization is required.')
    .isLength({ min: 2, max: 100 })
    .withMessage('Customer name must be at least 2 characters.'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required.')
    .matches(phoneRegex)
    .withMessage('Please provide a valid phone number (at least 7 to 15 digits).'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required.')
    .isEmail()
    .withMessage('Please provide a valid email address (e.g., name@company.com).')
    .normalizeEmail(),
  body('eventCategory')
    .optional()
    .trim(),
  body('eventType')
    .optional()
    .trim(),
  body('eventDate')
    .trim()
    .notEmpty()
    .withMessage('Event date is required.'),
  body('eventLocation')
    .trim()
    .notEmpty()
    .withMessage('Event location / city is required.')
    .isLength({ min: 2, max: 150 })
    .withMessage('Event location must be at least 2 characters.'),
  body('guestCount')
    .optional({ checkFalsy: true })
    .isInt({ min: 1, max: 100000 })
    .withMessage('Guest count must be a positive number.'),
  body('servicesRequired')
    .optional(),
  body('budget')
    .optional()
    .trim(),
  body('packagePreference')
    .optional()
    .trim(),
  body('additionalRequirements')
    .optional()
    .trim()
    .isLength({ max: 2500 })
    .withMessage('Additional requirements must not exceed 2500 characters.'),
];

/**
 * Catering Services Enquiry Validation Rules
 */
const cateringValidationRules = [
  body('customerName')
    .trim()
    .notEmpty()
    .withMessage('Customer name is required.')
    .isLength({ min: 2, max: 100 })
    .withMessage('Customer name must be at least 2 characters.'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required.')
    .matches(phoneRegex)
    .withMessage('Please provide a valid phone number.'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required.')
    .isEmail()
    .withMessage('Please provide a valid email address.')
    .normalizeEmail(),
  body('eventType')
    .optional()
    .trim(),
  body('cateringEventType')
    .optional()
    .trim(),
  body('eventDate')
    .trim()
    .notEmpty()
    .withMessage('Event date is required.'),
  body('eventLocation')
    .trim()
    .notEmpty()
    .withMessage('Event location is required.'),
  body('guestCount')
    .notEmpty()
    .withMessage('Expected guest count is required.')
    .isInt({ min: 1, max: 100000 })
    .withMessage('Guest count must be at least 1.'),
  body('foodPreference')
    .trim()
    .notEmpty()
    .withMessage('Please select your food preference.'),
  body('selectedPackage')
    .optional()
    .trim(),
  body('budgetPerPlate')
    .optional()
    .trim(),
  body('menuRequirements')
    .optional(),
  body('additionalRequirements')
    .optional()
    .trim()
    .isLength({ max: 2500 })
    .withMessage('Additional requirements must not exceed 2500 characters.'),
];

/**
 * Wedding Planner Enquiry Validation Rules
 */
const weddingValidationRules = [
  body('customerName')
    .trim()
    .notEmpty()
    .withMessage('Couple / Family contact name is required.')
    .isLength({ min: 2, max: 100 })
    .withMessage('Customer name must be at least 2 characters.'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required.')
    .matches(phoneRegex)
    .withMessage('Please provide a valid phone number.'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required.')
    .isEmail()
    .withMessage('Please provide a valid email address.')
    .normalizeEmail(),
  body('weddingDate')
    .trim()
    .notEmpty()
    .withMessage('Wedding date is required.'),
  body('venuePreference')
    .optional()
    .trim(),
  body('weddingVenueLocation')
    .optional()
    .trim(),
  body('guestCount')
    .notEmpty()
    .withMessage('Expected guest count is required.')
    .isInt({ min: 1, max: 50000 })
    .withMessage('Guest count must be at least 1.'),
  body('estimatedBudget')
    .optional()
    .trim(),
  body('totalWeddingBudget')
    .optional()
    .trim(),
  body('venueBookingRequired')
    .optional(),
  body('decorationRequired')
    .optional(),
  body('bridalMakeupRequired')
    .optional(),
  body('jewelleryRequired')
    .optional(),
  body('weddingSareeRequired')
    .optional(),
  body('photographyRequired')
    .optional(),
  body('cateringRequired')
    .optional(),
  body('entertainmentRequired')
    .optional(),
  body('packageType')
    .optional()
    .trim(),
  body('brideServices')
    .optional(),
  body('groomServices')
    .optional(),
  body('decorationRequirements')
    .optional(),
  body('cateringRequirements')
    .optional(),
  body('photographyRequirements')
    .optional(),
  body('additionalRequirements')
    .optional()
    .trim()
    .isLength({ max: 2500 })
    .withMessage('Additional requirements must not exceed 2500 characters.'),
  body('otherRequirements')
    .optional()
    .trim()
    .isLength({ max: 2500 })
    .withMessage('Other requirements must not exceed 2500 characters.'),
];

/**
 * Contact Us Enquiry Validation Rules
 */
const contactValidationRules = [
  body('customerName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required.')
    .isLength({ min: 2, max: 100 })
    .withMessage('Full name must be between 2 and 100 characters.'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required.')
    .matches(phoneRegex)
    .withMessage('Please provide a valid phone number.'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required.')
    .isEmail()
    .withMessage('Please provide a valid email address.')
    .normalizeEmail(),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required.')
    .isLength({ min: 3, max: 200 })
    .withMessage('Subject must be between 3 and 200 characters.'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required.')
    .isLength({ min: 5, max: 3000 })
    .withMessage('Message must be at least 5 characters.'),
];

module.exports = {
  handleValidationErrors,
  eventValidationRules,
  cateringValidationRules,
  weddingValidationRules,
  contactValidationRules,
};
