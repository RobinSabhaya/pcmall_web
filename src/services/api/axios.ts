import axios from 'axios';

import { API_URL } from '../../config/config';
import { errorMessage } from '../../hooks/useToaster';
// eslint-disable-next-line import/no-cycle
import { authService } from '../auth/auth.service';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: String(API_URL),
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
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
      const {
        response: {
          data: { message },
        },
      } = error;
      switch (error.response.status) {
        case 400:
          errorMessage(message);
          break;
        case 401: {
          // Refresh token silently
          const res = await authService.refreshTokens();

          if (!res?.success) {
            errorMessage('Session expired');

            setTimeout(async () => {
              await axiosInstance.post('/auth/logout');
            }, 2000);
          }
          break;
        }
        // case 403:
        //   break;
        // case 404:
        //   break;
        // case 500:
        // break;
        default:
          break;
      }
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
