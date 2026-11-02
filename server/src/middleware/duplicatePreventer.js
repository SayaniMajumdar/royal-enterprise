/**
 * Royal Enterprise - Duplicate Form Submission Prevention Middleware
 * Prevents accidental double submissions, rapid multi-clicks, or form spamming.
 */

const recentSubmissions = new Map();
const DUPLICATE_WINDOW_MS = 15000; // 15 seconds window

/**
 * Middleware to check and block duplicate submissions
 */
function preventDuplicateSubmission(req, res, next) {
  const email = (req.body.email || '').trim().toLowerCase();
  const phone = (req.body.phone || '').trim();
  const path = req.baseUrl + req.path;

  // If neither email nor phone is provided, let validation handle it
  if (!email && !phone) {
    return next();
  }

  const submissionKey = `${path}:${email || phone}`;
  const now = Date.now();
  const previousTime = recentSubmissions.get(submissionKey);

  if (previousTime && now - previousTime < DUPLICATE_WINDOW_MS) {
    const remainingSeconds = Math.ceil((DUPLICATE_WINDOW_MS - (now - previousTime)) / 1000);
    return res.status(429).json({
      success: false,
      message: `A recent enquiry was already received from this contact. Please wait ${remainingSeconds} second(s) before submitting again to prevent accidental duplicates.`,
      duplicate: true,
    });
  }

  // Record this submission timestamp
  recentSubmissions.set(submissionKey, now);

  // Periodic cleanup of stale cache items
  if (recentSubmissions.size > 200) {
    for (const [key, timestamp] of recentSubmissions.entries()) {
      if (now - timestamp > DUPLICATE_WINDOW_MS * 2) {
        recentSubmissions.delete(key);
      }
    }
  }

  next();
}

module.exports = {
  preventDuplicateSubmission,
};
