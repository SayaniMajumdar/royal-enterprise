const express = require('express');
const cors = require('cors');
const enquiryRoutes = require('./routes/enquiryRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev to avoid CORS friction
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Body parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Root welcome / status route
app.get('/', (req, res) => {
  res.json({
    name: 'Royal Enterprise Backend API',
    description: 'Enquiry processing service with Google Sheets API v4 integration',
    status: 'active',
    documentation: '/api/health',
  });
});

// API Routes
app.use('/api', enquiryRoutes);

// 404 Handler for undefined routes
app.use(notFoundHandler);

// Centralized Error Handler
app.use(errorHandler);

module.exports = app;
