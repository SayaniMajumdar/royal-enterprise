const rateLimit = require('express-rate-limit');

const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000; // 15 minutes
const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 40; // 40 submissions per IP

/**
 * Rate limiter middleware for public enquiry endpoints
 */
const enquiryRateLimiter = rateLimit({
  windowMs,
  max: maxRequests,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many enquiry submissions received from your IP. Please try again after a few minutes.',
  },
});

module.exports = {
  enquiryRateLimiter,
};
