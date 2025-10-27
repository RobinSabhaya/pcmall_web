import axios from 'axios';

import { API_URL } from '../../config/config';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL!,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

// Request Interceptor: Add access token dynamically
axiosInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('t');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  }, // Return response if successful
  async error => {
    // Handle different error cases
    if (!error.response) {
      console.error('Network Error: ', error.message);
    } else {
      switch (error.response.status) {
        case 400:
          console.error('Bad Request: ', error.response.data);
          break;
        case 401:
          console.error('Unauthorized! Redirecting to login...');
          break;
        case 403:
          console.error('Forbidden: ', error.response.data);
          break;
        case 404:
          console.error('Not Found: ', error.response.data);
          break;
        case 500:
          console.error('Internal Server Error: ', error.response.data.message);
          break;
        default:
          console.error('Error: ', error.response.data);
      }
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
