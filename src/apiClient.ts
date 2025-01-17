import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:9000/api", // Update with your backend's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add a request interceptor for the Bearer token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    console.log("token", token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
