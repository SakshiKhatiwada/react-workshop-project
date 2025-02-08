import axios from "axios";

export const baseURL = import.meta.env.VITE_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: baseURL || "https://api.example.com",
  headers: { "Content-Type": "application/json" },
});

// Request interceptor to add token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle server errors like 500
axiosInstance.interceptors.response.use(
  (response) => response, // Return the response as is for successful requests
  (error) => {
    if (error.response) {
      // Handle server errors (status 500 and others)
      if (error.response.status === 500) {
        // You can display an error message or perform other actions
        console.error("Server error occurred. Please try again later.");
        // Optionally, you could navigate to an error page or show a modal
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
