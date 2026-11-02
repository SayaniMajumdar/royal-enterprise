const express = require('express');
const router = express.Router();

const {
  handleEventEnquiry,
  handleCateringEnquiry,
  handleWeddingEnquiry,
  handleContactEnquiry,
  getHealthStatus,
} = require('../controllers/enquiryController');

const {
  handleValidationErrors,
  eventValidationRules,
  cateringValidationRules,
  weddingValidationRules,
  contactValidationRules,
} = require('../validators/enquiryValidator');

const { enquiryRateLimiter } = require('../middleware/rateLimiter');
const { preventDuplicateSubmission } = require('../middleware/duplicatePreventer');

// Health Check
router.get('/health', getHealthStatus);

// Enquiry Endpoints with rate limiting, input validation, and duplicate prevention
router.post(
  '/enquiries/event',
  enquiryRateLimiter,
  preventDuplicateSubmission,
  eventValidationRules,
  handleValidationErrors,
  handleEventEnquiry
);

router.post(
  '/enquiries/catering',
  enquiryRateLimiter,
  preventDuplicateSubmission,
  cateringValidationRules,
  handleValidationErrors,
  handleCateringEnquiry
);

router.post(
  '/enquiries/wedding',
  enquiryRateLimiter,
  preventDuplicateSubmission,
  weddingValidationRules,
  handleValidationErrors,
  handleWeddingEnquiry
);

router.post(
  '/enquiries/contact',
  enquiryRateLimiter,
  preventDuplicateSubmission,
  contactValidationRules,
  handleValidationErrors,
  handleContactEnquiry
);

module.exports = router;
