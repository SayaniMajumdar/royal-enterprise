const { Pool } = require('pg');

let pool = null;

function isDatabaseConfigured() {
  return Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);
}

function getPool() {
  if (!isDatabaseConfigured()) {
    return null;
  }
  if (!pool) {
    const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
    pool = new Pool({
      connectionString,
      ssl: connectionString.includes('localhost') ? false : { rejectUnauthorized: false },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    pool.on('error', (err) => {
      console.error('[PostgreSQL] Unexpected error on idle client:', err.message);
    });
  }
  return pool;
}

module.exports = {
  getPool,
  isDatabaseConfigured,
};
