const crypto = require('crypto');

/**
 * Generate a clean, unique submission tracking ID
 * @param {string} prefix - Category prefix (e.g., 'EVT', 'CAT', 'WED', 'CNT')
 * @returns {string} - Formatted ID like 'EVT-20261101-8A3F'
 */
function generateSubmissionId(prefix = 'REQ') {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const datePart = `${year}${month}${day}`;
  
  const randomSuffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `${prefix.toUpperCase()}-${datePart}-${randomSuffix}`;
}

/**
 * Get current ISO timestamp in readable IST/local format
 * @returns {string}
 */
function getCurrentTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').substring(0, 19);
}

module.exports = {
  generateSubmissionId,
  getCurrentTimestamp,
};
