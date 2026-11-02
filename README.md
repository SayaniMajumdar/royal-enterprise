# Royal Enterprise – Complete Business Website

> **Pinnacle of Luxury Event Management, Artisanal Catering & Bespoke Weddings**

A production-ready, full-stack enterprise web application engineered with **React (Vite) + Tailwind CSS** on the frontend and **Node.js + Express** on the backend, seamlessly integrated with **Google Sheets API v4** as a real-time cloud database.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture & Folder Structure](#architecture--folder-structure)
4. [Folder & File Responsibilities](#folder--file-responsibilities)
5. [Database Architecture (Google Sheets Tabs & Columns)](#database-architecture-google-sheets-tabs--columns)
6. [Complete Step-by-Step Google Cloud & Sheets Setup Guide](#complete-step-by-step-google-cloud--sheets-setup-guide)
7. [Installation & Local Execution](#installation--local-execution)
8. [Backend API Endpoints & Request Specifications](#backend-api-endpoints--request-specifications)
9. [Testing & Verification Guide](#testing--verification-guide)
10. [Security & Production Hardening](#security--production-hardening)

---

## 1. Project Overview

Royal Enterprise represents three core divisions under an imperial luxury brand identity:
1. **Event Management**: Corporate Conferences, Media Launches, Other Programs, Stage & Set Production.
2. **Catering Services**: Royal Banquets, Live Counters, Multi-Cuisine Veg & Non-Veg Menus, Package Tiers.
3. **Wedding Planner**: End-to-end wedding planning including Venue Selection, Mandap Decors, Bride & Groom Styling, Cinematic Film, and the **Complete Wedding Package**.
4. **Corporate Desk (Contact Us)**: Business inquiries, partnerships, and executive correspondence.

All user submissions from dedicated forms are validated, sanitized (with spreadsheet formula injection defense), and appended to specific tabs in a Google Spreadsheet in real time.

---

## 2. Technology Stack

### Frontend
- **React.js 18** with **Vite 5** (Blazing fast bundling & HMR)
- **Tailwind CSS 3.4** (Custom luxury color palette: Gold, Navy Obsidian, Ivory)
- **React Router DOM v6** (Client-side routing with automatic scroll-to-top)
- **Lucide React** (Modern, elegant SVG iconography)
- **Axios** (Robust HTTP requests with centralized interceptors)

### Backend
- **Node.js** & **Express.js** (RESTful API architecture)
- **Google Sheets API v4** (`googleapis`) with Google Service Account (JWT authentication)
- **express-validator** (Strict server-side validation & normalization)
- **express-rate-limit** (Anti-abuse and spam protection)
- **cors** & **dotenv** (Secure CORS policies and environment configuration)

### Database
- **Google Sheets (Primary Cloud Database)** with automatic tab creation and header initialization.
- **Local Fallback Storage (`server/data/submissions_backup.json`)**: Allows seamless local testing out-of-the-box before configuring Google Cloud credentials.

---

## 3. Architecture & Folder Structure

```
royal-enterprise/
├── client/
│   ├── public/
│   │   ├── images/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── catering/
│   │   │   │   ├── CateringEnquiryForm.jsx
│   │   │   │   ├── CateringMenuSection.jsx
│   │   │   │   └── CateringPackages.jsx
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── CheckboxGroup.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── SectionHeader.jsx
│   │   │   │   ├── Select.jsx
│   │   │   │   ├── Textarea.jsx
│   │   │   │   └── Toast.jsx
│   │   │   ├── event/
│   │   │   │   ├── EventEnquiryForm.jsx
│   │   │   │   └── EventServiceCard.jsx
│   │   │   ├── home/
│   │   │   │   ├── CallToAction.jsx
│   │   │   │   ├── DivisionOverview.jsx
│   │   │   │   ├── ExperienceStats.jsx
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   └── WhyChooseUs.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── QuickQuoteModal.jsx
│   │   │   └── wedding/
│   │   │       ├── CompletePackageBanner.jsx
│   │   │       ├── WeddingEnquiryForm.jsx
│   │   │       └── WeddingServicesList.jsx
│   │   ├── context/
│   │   │   └── NotificationContext.jsx
│   │   ├── data/
│   │   │   └── mockData.js
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Catering.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── EventManagement.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── WeddingPlanner.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/
│   ├── data/
│   │   └── submissions_backup.json
│   ├── src/
│   │   ├── config/
│   │   │   └── googleSheets.js
│   │   ├── controllers/
│   │   │   └── enquiryController.js
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   ├── routes/
│   │   │   └── enquiryRoutes.js
│   │   ├── services/
│   │   │   └── googleSheetsService.js
│   │   ├── utils/
│   │   │   ├── idGenerator.js
│   │   │   └── sanitize.js
│   │   ├── validators/
│   │   │   └── enquiryValidator.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## 4. Folder & File Responsibilities

### Root
- `package.json`: Manages concurrent execution of both frontend and backend (`npm run dev`) with colored logs.
- `.gitignore`: Prevents checking in private keys (`*.pem`, `service-account-key.json`), `.env` files, build output, and `node_modules`.

### Client (`client/`)
- `src/components/common/`: Reusable luxury UI primitives (`Button`, `Input`, `Select`, `Textarea`, `CheckboxGroup`, `SectionHeader`, `Toast`, `Modal`).
- `src/components/layout/`: Global wrappers (`Navbar` with mobile drawer and sticky blur, `Footer` with company information, `QuickQuoteModal`, and `Layout`).
- `src/components/home/`: Homepage showcase sections (`HeroSection`, `DivisionOverview`, `WhyChooseUs`, `ExperienceStats`, `CallToAction`).
- `src/components/event/`: Event management cards and the dedicated `EventEnquiryForm`.
- `src/components/catering/`: Interactive menu showcase with veg/non-veg tags, package cards, and `CateringEnquiryForm`.
- `src/components/wedding/`: Pillars of wedding planning, `CompletePackageBanner`, and `WeddingEnquiryForm`.
- `src/context/NotificationContext.jsx`: Global notification system powering toasts with auto-dismissal.
- `src/services/api.js`: Axios client communicating with `http://localhost:5000/api`.
- `src/data/mockData.js`: Centralized mock information, company contact placeholders, menus, and packages.
- `src/pages/`: Dedicated routing views (`Home`, `EventManagement`, `Catering`, `WeddingPlanner`, `About`, `Contact`, `NotFound`).

### Server (`server/`)
- `src/config/googleSheets.js`: Authenticates with Google Sheets API v4 using JWT Service Account credentials and handles newline escaping on private keys.
- `src/services/googleSheetsService.js`: Defines sheet names and header definitions. Verifies or automatically initializes spreadsheet tabs and column headers, and appends rows.
- `src/utils/sanitize.js`: Protects against **Google Sheets Formula Injection (CWE-1236)** by prepending `'` to values starting with `=`, `+`, `-`, `@`, `\t`, or `\r`.
- `src/utils/idGenerator.js`: Generates clean, unique tracking IDs (`EVT-...`, `CAT-...`, `WED-...`, `CNT-...`).
- `src/validators/enquiryValidator.js`: Express-validator schemas verifying phone numbers, email structure, guest counts, and dates.
- `src/middleware/rateLimiter.js`: Protects API endpoints against flood attacks (40 requests / 15 minutes per IP).
- `src/middleware/errorHandler.js`: Centralized error logging and standardized JSON responses.
- `src/controllers/enquiryController.js`: Extracts parameters, builds row records, and dispatches rows to Google Sheets.
- `src/routes/enquiryRoutes.js`: Maps POST and GET routes.
- `src/app.js`: Express setup, CORS, body parsing, routing, and error handlers.
- `src/server.js`: Server entrypoint with diagnostic startup checks and graceful shutdown hooks.

---

## 5. Database Architecture (Google Sheets Tabs & Columns)

The backend interacts with **4 distinct tabs** in the specified Google Spreadsheet:

### Sheet 1: `Event Management Enquiries`
| Column Index | Column Header | Description |
|---|---|---|
| A | **Submission ID** | e.g. `EVT-20261101-A4F9` |
| B | **Submission Date** | YYYY-MM-DD HH:mm:ss |
| C | **Customer Name** | Full name or company |
| D | **Phone** | Customer phone number |
| E | **Email** | Validated email address |
| F | **Event Category** | Corporate, Media, Other, Stage & Set Design |
| G | **Event Date** | Proposed date |
| H | **Event Location** | Venue / City |
| I | **Guest Count** | Number of attendees |
| J | **Services Required** | Comma-separated list of selected services |
| K | **Additional Requirements** | Custom requests & details |
| L | **Status** | Defaults to `New` |

### Sheet 2: `Catering Enquiries`
| Column Index | Column Header | Description |
|---|---|---|
| A | **Submission ID** | e.g. `CAT-20261101-B7E2` |
| B | **Submission Date** | YYYY-MM-DD HH:mm:ss |
| C | **Customer Name** | Full name |
| D | **Phone** | Customer phone number |
| E | **Email** | Validated email address |
| F | **Event Type** | Wedding, Corporate, Birthday, Reception, etc. |
| G | **Event Date** | Event date |
| H | **Event Location** | Venue / City |
| I | **Guest Count** | Expected diners |
| J | **Food Preference** | Vegetarian, Non-Vegetarian, Both, Jain |
| K | **Menu Requirements** | Cuisines, live counters, package selection |
| L | **Additional Requirements** | Custom dietary notes or cutlery requests |
| M | **Status** | Defaults to `New` |

### Sheet 3: `Wedding Planner Enquiries`
| Column Index | Column Header | Description |
|---|---|---|
| A | **Submission ID** | e.g. `WED-20261101-C3D8` |
| B | **Submission Date** | YYYY-MM-DD HH:mm:ss |
| C | **Customer Name** | Bride & Groom / Family name |
| D | **Phone** | Customer phone number |
| E | **Email** | Validated email address |
| F | **Wedding Date** | Auspicious wedding date |
| G | **Venue Preference** | Palaces, Resorts, Banquet halls |
| H | **Guest Count** | Expected guests |
| I | **Estimated Budget** | Budget tier |
| J | **Bride Services** | Makeup, Sarees, Lehengas, Jewellery |
| K | **Groom Services** | Sherwani, Styling, Safa, Baraat |
| L | **Decoration Requirements** | Mandap, Stage, Floral, Lighting |
| M | **Catering Requirements** | Wedding feast scope |
| N | **Photography Requirements**| Cinematic film, Candid, Drone, Albums |
| O | **Package Type** | Complete Wedding Package vs. Individual Services |
| P | **Additional Requirements** | Ritual specifics, color palettes, special wishes |
| Q | **Status** | Defaults to `New` |

### Sheet 4: `Contact Enquiries`
| Column Index | Column Header | Description |
|---|---|---|
| A | **Submission ID** | e.g. `CNT-20261101-D9F4` |
| B | **Submission Date** | YYYY-MM-DD HH:mm:ss |
| C | **Customer Name** | Full name |
| D | **Phone** | Customer phone number |
| E | **Email** | Validated email address |
| F | **Subject** | Inquiry topic |
| G | **Message** | Inquiry message |
| H | **Status** | Defaults to `New` |

---

## 6. Complete Step-by-Step Google Cloud & Sheets Setup Guide

Follow these 8 steps to connect your website with a live Google Spreadsheet:

### Step 1: Create a Google Cloud Project
1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the project dropdown at the top of the page and click **"New Project"**.
3. Name your project (e.g., `royal-enterprise-portal`) and click **"Create"**.
4. Make sure your new project is selected in the project selector.

### Step 2: Enable the Google Sheets API
1. In the Google Cloud Console, navigate to **APIs & Services** > **Library**.
2. In the search box, type `Google Sheets API`.
3. Click on **Google Sheets API** from the search results.
4. Click the blue **"Enable"** button.

### Step 3: Create a Service Account
1. In the left navigation menu, go to **APIs & Services** > **Credentials**.
2. Click **"+ CREATE CREDENTIALS"** at the top and select **"Service account"**.
3. Fill in the service account details:
   - **Service account name**: `royal-sheets-service-account`
   - **Service account ID**: automatically generated (e.g., `royal-sheets-service-account@royal-enterprise-portal.iam.gserviceaccount.com`).
4. Click **"Create and Continue"**.
5. (Optional) For Role, you may assign **Project > Editor** or leave it blank. Click **"Continue"** then **"Done"**.

### Step 4: Generate Service Account Key Credentials (JSON)
1. On the **Credentials** page, look for the **Service Accounts** section.
2. Click on the email address of the service account you just created.
3. Switch to the **"Keys"** tab.
4. Click **"ADD KEY"** > **"Create new key"**.
5. Select **JSON** as the key type and click **"Create"**.
6. A `.json` credentials file will download to your computer. Keep this file safe and never commit it to Git!

### Step 5: Create the Google Spreadsheet
1. Open [Google Sheets](https://sheets.new) in your web browser.
2. Title the spreadsheet: `Royal Enterprise - Customer Enquiries Database`.
3. Note: You **do not** need to manually format the tabs or column names! The backend has an **automatic header initialization engine** that will automatically create the 4 tabs with bold formatted column headers on the first submission.

### Step 6: Share the Spreadsheet with the Service Account Email
1. Copy the `client_email` from your downloaded JSON key file (e.g., `royal-sheets-service-account@...iam.gserviceaccount.com`).
2. In your Google Spreadsheet, click the green **"Share"** button in the top-right corner.
3. Paste the service account email into the "Add people and groups" box.
4. Set the role to **"Editor"**.
5. Uncheck "Notify people" and click **"Share"** (or **"Send"**).

### Step 7: Configure Environment Variables in `server/.env`
1. Copy the Spreadsheet ID from your Google Sheets URL:
   ```
   https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
                                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                         This highlighted string is your GOOGLE_SHEET_ID
   ```
2. Open `server/.env` in your text editor.
3. Set `GOOGLE_SHEET_ID` to that value.
4. Set `GOOGLE_SERVICE_ACCOUNT_EMAIL` to the `client_email` from your JSON file.
5. Set `GOOGLE_PRIVATE_KEY` to the `private_key` from your JSON file. Ensure you keep the quotation marks and the `\n` characters:
   ```env
   GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
   GOOGLE_SERVICE_ACCOUNT_EMAIL=royal-sheets-service-account@royal-enterprise-portal.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDvX32...\n-----END PRIVATE KEY-----\n"
   ```

### Step 8: Run and Test the Integration
1. Start the server (`npm --prefix server run dev`).
2. The server console will print:
   ```
   ====================================================
    Royal Enterprise Server running on port 5000
    Environment: development
    Health check: http://localhost:5000/api/health
   ----------------------------------------------------
    [Status] Google Sheets integration: CONFIGURED (Live Sheets Mode)
   ====================================================
   ```
3. Submit any form on the website. Within seconds, a new row will populate in the respective Google Sheets tab!

---

## 7. Installation & Local Execution

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Step 1: Clone or Navigate to the Workspace
```bash
cd royal-enterprise
```

### Step 2: Install Dependencies
Run the unified install script from the project root:
```bash
npm run install:all
```
*(Or install manually in both folders)*:
```bash
npm --prefix client install
npm --prefix server install
```

### Step 3: Configure Environment Files
Both client and server have pre-configured `.env` and `.env.example` files:
```bash
# Server configuration:
# server/.env is already created. Add your Google credentials when ready.

# Client configuration:
# client/.env points to http://localhost:5000/api
```

### Step 4: Launch the Full Application
From the root directory, start both client and server concurrently:
```bash
npm run dev
```
- **Frontend App**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 8. Backend API Endpoints & Request Specifications

### 1. Health Status
- **`GET /api/health`**
- **Response**:
  ```json
  {
    "status": "online",
    "service": "Royal Enterprise Backend API",
    "googleSheets": {
      "configured": true,
      "sheetIdConfigured": true,
      "serviceAccountConfigured": true
    }
  }
  ```

### 2. Event Management Enquiry
- **`POST /api/enquiries/event`**
- **Body**:
  ```json
  {
    "customerName": "Tata Consultancy Services",
    "phone": "+91 98765 43210",
    "email": "events@tcs.com",
    "eventCategory": "Corporate Events",
    "eventDate": "2026-12-15",
    "eventLocation": "Taj Palace, New Delhi",
    "guestCount": 600,
    "servicesRequired": ["Custom Stage Design", "Acoustic Audio", "Intelligent Lighting"],
    "additionalRequirements": "Annual global leadership symposium with keynote stage."
  }
  ```

### 3. Catering Services Enquiry
- **`POST /api/enquiries/catering`**
- **Body**:
  ```json
  {
    "customerName": "Mr. Vikram Singhania",
    "phone": "+91 98765 43210",
    "email": "singhania@example.com",
    "eventType": "Reception Party",
    "eventDate": "2026-11-20",
    "eventLocation": "ITC Grand Bharat, Gurugram",
    "guestCount": 450,
    "foodPreference": "Vegetarian and Non-Vegetarian",
    "menuRequirements": ["Royal Awadhi & Mughlai", "Live Chaat Street", "Artisanal Desserts"],
    "additionalRequirements": "Gold cutlery presentation and 6 live culinary theatres."
  }
  ```

### 4. Wedding Planner Enquiry
- **`POST /api/enquiries/wedding`**
- **Body**:
  ```json
  {
    "customerName": "Ananya Roy & Rohan Mehra",
    "phone": "+91 98765 43210",
    "email": "wedding@ananyarohan.com",
    "weddingDate": "2027-02-14",
    "venuePreference": "The Leela Palace, Udaipur",
    "guestCount": 350,
    "estimatedBudget": "₹50 Lakhs - ₹1 Crore",
    "brideServices": ["Bridal HD Makeup", "Designer Lehengas", "Heritage Jewellery"],
    "groomServices": ["Designer Sherwani", "Safa Tying", "Vintage Car Baraat"],
    "decorationRequirements": ["Vedic Mandap", "Floral Entrances", "Ambient Lighting"],
    "cateringRequirements": "Full Wedding Feast (Veg & Non-Veg Banquets)",
    "photographyRequirements": "Complete Cinematic Film + Candid + Drone + Heirloom Albums",
    "packageType": "Complete Wedding Package",
    "additionalRequirements": "Royal Rajasthani folk artists for Sangeet night."
  }
  ```

### 5. Business / Contact Us Enquiry
- **`POST /api/enquiries/contact`**
- **Body**:
  ```json
  {
    "customerName": "Kabir Oberoi",
    "phone": "+91 98765 43210",
    "email": "kabir@oberoi-holdings.com",
    "subject": "Corporate Annual Partnership",
    "message": "We would like to discuss an annual contract for our quarterly corporate summits."
  }
  ```

---

## 9. Testing & Verification Guide

### Quick Health Verification via cURL / PowerShell
```powershell
# Test Health Endpoint
curl http://localhost:5000/api/health
```

### Testing Forms Through the Web UI
1. **Event Management Form**:
   - Navigate to `http://localhost:5173/events`
   - Scroll down to the **Event Management Enquiry Form**.
   - Fill in your test details and click **"Submit Event Enquiry"**.
   - Verify:
     - A green success toast notification appears with a confirmation ID (e.g. `EVT-20261101-XXXX`).
     - Check your Google Spreadsheet tab: **`Event Management Enquiries`**. The row will appear instantly with Status `New`.

2. **Catering Services Form**:
   - Navigate to `http://localhost:5173/catering`
   - Scroll down to the **Catering Services Enquiry Form**.
   - Choose your event type, guest count (e.g. 300), food preferences, and submit.
   - Verify the row in Google Sheets tab: **`Catering Enquiries`**.

3. **Wedding Planner Form**:
   - Navigate to `http://localhost:5173/wedding-planner`
   - Click the **"Get a Wedding Plan"** button in the Complete Wedding Package banner.
   - Fill in wedding dates, budget tier, bride & groom services, and submit.
   - Verify the row in Google Sheets tab: **`Wedding Planner Enquiries`**.

4. **Contact Us Form**:
   - Navigate to `http://localhost:5173/contact`
   - Complete the **Send a Business Enquiry** form and click **"Submit Message"**.
   - Verify the row in Google Sheets tab: **`Contact Enquiries`**.

5. **Quick Quote Global Modal**:
   - Click the gold **"Get a Quote"** button in the navigation header from any page.
   - Switch between Event Mgmt, Catering, and Wedding tabs, submit an enquiry, and verify instant logging.

---

## 10. Security & Production Hardening

1. **Spreadsheet Formula Injection Defense (CWE-1236)**:
   Any user-submitted string beginning with spreadsheet operators (`=`, `+`, `-`, `@`, `\t`, `\r`) is automatically sanitized and prefixed with a single quotation mark `'` in `server/src/utils/sanitize.js`. This guarantees Google Sheets parses it strictly as raw literal text, preventing CSV formula command injection.
2. **Credential Isolation**:
   Google Service Account private keys are strictly parsed server-side in `server/src/config/googleSheets.js`. No private keys or service account emails are ever sent or exposed to the browser client.
3. **Input Validation & Sanitization**:
   All incoming payloads are strictly validated using `express-validator` to ensure valid email formats, sanitized strings, and constrained numerical guest counts.
4. **Rate Limiting**:
   The public enquiry endpoints are protected by `express-rate-limit` to prevent denial-of-service or bot spam.
5. **Zero Local Storage as Database**:
   Enquiry data is strictly communicated to the backend API and written to Google Sheets API v4 (with automatic local file backup only when live credentials have not yet been configured).

---

&copy; Royal Enterprise. All rights reserved.
