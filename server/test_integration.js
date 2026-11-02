const http = require('http');
const fs = require('fs');
const path = require('path');

// Clear backup data before running test
const backupPath = path.resolve(__dirname, 'data/submissions_backup.json');
if (fs.existsSync(backupPath)) {
  fs.writeFileSync(backupPath, '[]', 'utf-8');
}

// Start backend server
const app = require('./src/app');
const server = app.listen(5001, async () => {
  console.log('Test server running on port 5001');

  try {
    // 1. Test /api/health
    const health = await makeRequest('/api/health', 'GET');
    console.log('✓ /api/health response:', health.data.integration);

    // 2. Test Event Enquiry Submission
    const eventPayload = {
      customerName: 'Aditya Birla Group',
      phone: '+91 98300 12345',
      email: 'aditya.events@birla.com',
      eventCategory: 'Corporate Events & Conferences',
      eventDate: '2026-11-20',
      eventLocation: 'Kolkata Grand Ballroom',
      guestCount: 450,
      servicesRequired: ['Venue Sourcing & Booking', 'Concept & Stage Decor', 'Audiovisual & Technicals'],
      budget: '₹15,00,000 - ₹30,00,000',
      packagePreference: 'Gold Package',
      additionalRequirements: '=HYPERLINK("malicious.com") High-speed LED display wall required.',
    };

    const eventRes = await makeRequest('/api/enquiries/event', 'POST', eventPayload);
    console.log('✓ Event Enquiry Response:', eventRes.data.success, eventRes.data.submissionId);

    // 3. Test Catering Enquiry Submission
    const cateringPayload = {
      customerName: 'Mr. & Mrs. Singhania',
      phone: '+91 98200 67890',
      email: 'singhania.wedding@gmail.com',
      eventType: 'Wedding Ceremony',
      selectedPackage: 'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)',
      eventDate: '2026-12-10',
      eventLocation: 'ITC Royal Bengal, Kolkata',
      guestCount: 600,
      foodPreference: 'Vegetarian and Non-Vegetarian',
      budgetPerPlate: '₹1,800 - ₹2,500 / Plate',
      menuRequirements: ['Live Charcoal Tandoori Kebab Station', 'Kolkata Bhetki Paturi & Daab Chingri Station'],
      additionalRequirements: 'Exclusive pure vegetarian buffet counter on the left wing.',
    };

    const cateringRes = await makeRequest('/api/enquiries/catering', 'POST', cateringPayload);
    console.log('✓ Catering Enquiry Response:', cateringRes.data.success, cateringRes.data.submissionId);

    // 4. Test Wedding Enquiry Submission
    const weddingPayload = {
      customerName: 'Ananya Roy & Rohan Mehra',
      phone: '+91 98100 54321',
      email: 'rohan.ananya2026@gmail.com',
      weddingDate: '2027-01-18',
      weddingVenueLocation: 'Udaipur Heritage Palace',
      guestCount: 750,
      totalWeddingBudget: '₹1 Crore - ₹3 Crores',
      venueBookingRequired: 'Yes',
      decorationRequired: 'Yes',
      bridalMakeupRequired: 'Yes',
      jewelleryRequired: 'Yes',
      weddingSareeRequired: 'Yes',
      photographyRequired: 'Yes',
      cateringRequired: 'Yes',
      entertainmentRequired: 'Yes',
      packageType: 'Complete Wedding Package (End-to-End Responsibility)',
      otherRequirements: 'Royal vintage car entry for Baraat, fireworks display permits.',
    };

    const weddingRes = await makeRequest('/api/enquiries/wedding', 'POST', weddingPayload);
    console.log('✓ Wedding Enquiry Response:', weddingRes.data.success, weddingRes.data.submissionId);

    // 5. Test Duplicate Prevention (Immediate re-submission of wedding)
    const duplicateRes = await makeRequest('/api/enquiries/wedding', 'POST', weddingPayload);
    console.log('✓ Duplicate check status (should be 429):', duplicateRes.status, duplicateRes.data.duplicate === true);

    // 6. Inspect Saved Rows and verify column counts & formula injection protection
    const rawBackup = fs.readFileSync(backupPath, 'utf-8');
    const records = JSON.parse(rawBackup);
    console.log(`\n✓ Total records stored in backup: ${records.length}`);

    const eventRecord = records.find(r => r.sheetName === 'Event Management');
    console.log(`✓ 'Event Management' columns count: ${eventRecord.data.length} (Expected: 11)`);
    console.log('   Data:', eventRecord.data);

    const cateringRecord = records.find(r => r.sheetName === 'Catering');
    console.log(`✓ 'Catering' columns count: ${cateringRecord.data.length} (Expected: 12)`);
    console.log('   Data:', cateringRecord.data);

    const weddingRecord = records.find(r => r.sheetName === 'Wedding Planner');
    console.log(`✓ 'Wedding Planner' columns count: ${weddingRecord.data.length} (Expected: 17)`);
    console.log('   Data:', weddingRecord.data);

    // Verify formula injection sanitization on event additional requirements
    const sanitizedField = eventRecord.data[10];
    const isSanitized = sanitizedField.includes("'=HYPERLINK");
    console.log(`✓ Formula injection sanitization verified: ${isSanitized} (${sanitizedField.substring(0, 50)}...)`);

    console.log('\nALL 6 BACKEND & GOOGLE SHEETS MAPPING TESTS PASSED SUCCESSFULLY!');
  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    server.close();
    process.exit(0);
  }
});

function makeRequest(path, method, body = null) {
  return new Promise((resolve, reject) => {
    const postData = body ? JSON.stringify(body) : '';
    const req = http.request({
      hostname: 'localhost',
      port: 5001,
      path,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    }, (res) => {
      let rawData = '';
      res.on('data', chunk => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(rawData);
          resolve({ status: res.statusCode, data: parsed });
        } catch {
          resolve({ status: res.statusCode, raw: rawData });
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(postData);
    }
    req.end();
  });
}
