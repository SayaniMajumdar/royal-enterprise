const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const { isGoogleSheetsConfigured } = require('./config/googleSheets');

const PORT = process.env.PORT || 5000;

let server;
if (!process.env.VERCEL) {
  server = app.listen(PORT, () => {
    console.log('====================================================');
    console.log(` Royal Enterprise Server running on port ${PORT}`);
    console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(` Health check: http://localhost:${PORT}/api/health`);
    console.log('----------------------------------------------------');
    
    if (isGoogleSheetsConfigured()) {
      console.log(' [Status] Google Sheets integration: CONFIGURED (Live Sheets Mode)');
    } else {
      console.log(' [Status] Google Sheets credentials not detected.');
      console.log('          Running in Local Backup Mode (server/data/submissions_backup.json).');
      console.log('          To enable live Google Sheets, update server/.env with your Service Account.');
    }
    console.log('====================================================');
  });

  // Graceful shutdown handling
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    if (server) {
      server.close(() => {
        console.log('HTTP server closed');
      });
    }
  });

  process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    if (server) {
      server.close(() => {
        console.log('HTTP server closed');
      });
    }
  });
}

module.exports = app;
