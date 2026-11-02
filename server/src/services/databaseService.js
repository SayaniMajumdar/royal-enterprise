const { getPool, isDatabaseConfigured } = require('../config/database');

let initialized = false;

/**
 * Automatically initialize database tables if they do not exist
 */
async function initDatabase() {
  const pool = getPool();
  if (!pool || initialized) return;

  try {
    // 1. Event Enquiries Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS event_enquiries (
        id SERIAL PRIMARY KEY,
        submission_id VARCHAR(50) UNIQUE NOT NULL,
        customer_name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        event_type VARCHAR(255),
        event_date VARCHAR(100),
        event_location VARCHAR(255),
        guest_count VARCHAR(50),
        required_services TEXT,
        budget VARCHAR(100),
        additional_requirements TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 2. Catering Enquiries Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS catering_enquiries (
        id SERIAL PRIMARY KEY,
        submission_id VARCHAR(50) UNIQUE NOT NULL,
        customer_name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        catering_event_type VARCHAR(255),
        event_date VARCHAR(100),
        event_location VARCHAR(255),
        guest_count VARCHAR(50),
        food_preference VARCHAR(100),
        selected_package VARCHAR(255),
        budget_per_plate VARCHAR(100),
        additional_requirements TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 3. Wedding Enquiries Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS wedding_enquiries (
        id SERIAL PRIMARY KEY,
        submission_id VARCHAR(50) UNIQUE NOT NULL,
        customer_name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        wedding_date VARCHAR(100),
        wedding_venue VARCHAR(255),
        guest_count VARCHAR(50),
        total_budget VARCHAR(100),
        venue_booking VARCHAR(50),
        decoration VARCHAR(50),
        bridal_makeup VARCHAR(50),
        jewellery VARCHAR(50),
        wedding_saree VARCHAR(50),
        photography VARCHAR(50),
        catering VARCHAR(50),
        entertainment VARCHAR(50),
        other_requirements TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 4. Contact Enquiries Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_enquiries (
        id SERIAL PRIMARY KEY,
        submission_id VARCHAR(50) UNIQUE NOT NULL,
        customer_name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    initialized = true;
    console.log('[PostgreSQL] Database tables verified & ready.');
  } catch (error) {
    console.error('[PostgreSQL] Table initialization error:', error.message);
  }
}

/**
 * Save Event Management Enquiry into Postgres
 */
async function saveEventEnquiry(data, submissionId) {
  const pool = getPool();
  if (!pool) return null;

  await initDatabase();

  const query = `
    INSERT INTO event_enquiries (
      submission_id, customer_name, phone, email, event_type, 
      event_date, event_location, guest_count, required_services, 
      budget, additional_requirements
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING id, submission_id, created_at;
  `;

  const values = [
    submissionId,
    data.customerName,
    data.phone,
    data.email,
    data.eventType || data.eventCategory || 'Corporate / Social Event',
    data.eventDate || null,
    data.eventLocation || null,
    data.guestCount ? String(data.guestCount) : null,
    Array.isArray(data.servicesRequired || data.requiredServices)
      ? (data.servicesRequired || data.requiredServices).join(', ')
      : data.servicesRequired || data.requiredServices || null,
    data.budget ? String(data.budget) : null,
    data.additionalRequirements || null,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

/**
 * Save Catering Enquiry into Postgres
 */
async function saveCateringEnquiry(data, submissionId) {
  const pool = getPool();
  if (!pool) return null;

  await initDatabase();

  const query = `
    INSERT INTO catering_enquiries (
      submission_id, customer_name, phone, email, catering_event_type, 
      event_date, event_location, guest_count, food_preference, 
      selected_package, budget_per_plate, additional_requirements
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING id, submission_id, created_at;
  `;

  const values = [
    submissionId,
    data.customerName,
    data.phone,
    data.email,
    data.cateringEventType || data.eventType || 'Catering Event',
    data.eventDate || null,
    data.eventLocation || null,
    data.guestCount ? String(data.guestCount) : null,
    data.foodPreference || null,
    data.packagePreference || data.selectedPackage || null,
    data.budgetPerPlate ? String(data.budgetPerPlate) : null,
    data.additionalRequirements || null,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

/**
 * Save Wedding Enquiry into Postgres
 */
async function saveWeddingEnquiry(data, submissionId) {
  const pool = getPool();
  if (!pool) return null;

  await initDatabase();

  const query = `
    INSERT INTO wedding_enquiries (
      submission_id, customer_name, phone, email, wedding_date, 
      wedding_venue, guest_count, total_budget, venue_booking, 
      decoration, bridal_makeup, jewellery, wedding_saree, 
      photography, catering, entertainment, other_requirements
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    RETURNING id, submission_id, created_at;
  `;

  const values = [
    submissionId,
    data.customerName,
    data.phone,
    data.email,
    data.weddingDate || null,
    data.weddingVenue || data.eventLocation || null,
    data.guestCount ? String(data.guestCount) : null,
    data.budget || data.totalBudget ? String(data.budget || data.totalBudget) : null,
    data.venueBooking || 'No',
    data.decoration || 'No',
    data.bridalMakeup || 'No',
    data.jewellery || 'No',
    data.weddingSaree || 'No',
    data.photography || 'No',
    data.catering || 'No',
    data.entertainment || 'No',
    data.otherRequirements || data.additionalRequirements || null,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

/**
 * Save Contact Enquiry into Postgres
 */
async function saveContactEnquiry(data, submissionId) {
  const pool = getPool();
  if (!pool) return null;

  await initDatabase();

  const query = `
    INSERT INTO contact_enquiries (
      submission_id, customer_name, phone, email, subject, message
    ) VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, submission_id, created_at;
  `;

  const values = [
    submissionId,
    data.customerName,
    data.phone,
    data.email,
    data.subject || 'General Enquiry',
    data.message || '',
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

module.exports = {
  initDatabase,
  saveEventEnquiry,
  saveCateringEnquiry,
  saveWeddingEnquiry,
  saveContactEnquiry,
};
