import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || '/api';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15 seconds
});

// Response interceptor for consistent error extraction
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    let errorMessage = 'An unexpected network error occurred. Please check your connection and try again.';
    let validationErrors = [];

    if (error.response && error.response.data) {
      errorMessage = error.response.data.message || errorMessage;
      if (Array.isArray(error.response.data.errors)) {
        validationErrors = error.response.data.errors;
      }
    } else if (error.request) {
      errorMessage = 'Unable to reach the server. Please verify the backend service is running.';
    }

    const customError = new Error(errorMessage);
    customError.validationErrors = validationErrors;
    customError.status = error.response ? error.response.status : null;
    return Promise.reject(customError);
  }
);

/**
 * Submit Event Management Enquiry
 */
export const submitEventEnquiry = async (data) => {
  return await apiClient.post('/enquiries/event', data);
};

/**
 * Submit Catering Services Enquiry
 */
export const submitCateringEnquiry = async (data) => {
  return await apiClient.post('/enquiries/catering', data);
};

/**
 * Submit Wedding Planner Enquiry
 */
export const submitWeddingEnquiry = async (data) => {
  return await apiClient.post('/enquiries/wedding', data);
};

/**
 * Submit General / Business Contact Enquiry
 */
export const submitContactEnquiry = async (data) => {
  return await apiClient.post('/enquiries/contact', data);
};

/**
 * Check Backend and Google Sheets API health
 */
export const checkApiHealth = async () => {
  return await apiClient.get('/health');
};

export default apiClient;
