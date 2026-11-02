/**
 * Sanitize cell values before inserting into Google Sheets to prevent formula injection
 * (CSV/Spreadsheet Formula Injection CWE-1236).
 * Values starting with =, +, -, @, \t, or \r can execute arbitrary functions when opened in spreadsheets.
 */
function sanitizeCell(value) {
  if (value === null || value === undefined) {
    return '';
  }

  if (Array.isArray(value)) {
    return value.map((item) => sanitizeCell(item)).join(', ');
  }

  if (typeof value === 'boolean' || typeof value === 'number') {
    return value;
  }

  let str = String(value).trim();

  // Characters that initiate formula execution in spreadsheet software
  const formulaTriggers = ['=', '+', '-', '@', '\t', '\r'];

  if (str.length > 0 && formulaTriggers.includes(str.charAt(0))) {
    // Prepend single quote so Google Sheets treats it as raw literal text
    str = `'${str}`;
  }

  // Also neutralize embedded formula triggers like '=HYPERLINK' or '=CMD'
  str = str.replace(/=(HYPERLINK|IMPORTXML|IMAGE|CMD|DDE|CONCATENATE)/gi, "'=$1");

  return str;
}

/**
 * Recursively sanitize all fields of an object
 */
function sanitizePayload(data) {
  if (!data || typeof data !== 'object') {
    return sanitizeCell(data);
  }

  if (Array.isArray(data)) {
    return data.map(sanitizePayload);
  }

  const sanitized = {};
  for (const [key, val] of Object.entries(data)) {
    if (typeof val === 'string') {
      sanitized[key] = sanitizeCell(val);
    } else if (Array.isArray(val)) {
      sanitized[key] = val.map((v) => (typeof v === 'string' ? sanitizeCell(v) : v));
    } else {
      sanitized[key] = val;
    }
  }
  return sanitized;
}

module.exports = {
  sanitizeCell,
  sanitizePayload,
};
