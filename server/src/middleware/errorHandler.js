/**
 * Centralized Express Error Handler
 */
function errorHandler(err, req, res, next) {
  console.error('[Error Details]:', err);

  const statusCode = err.statusCode || err.status || 500;
  let message = err.message || 'An unexpected internal server error occurred. Please try again.';

  // Handle specific Google Sheets API errors cleanly
  if (err.errors && Array.isArray(err.errors)) {
    const gError = err.errors[0];
    if (gError && gError.message) {
      message = `Google Sheets Service Error: ${gError.message}`;
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}

/**
 * 404 Route Handler
 */
function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`,
  });
}

module.exports = {
  errorHandler,
  notFoundHandler,
};
