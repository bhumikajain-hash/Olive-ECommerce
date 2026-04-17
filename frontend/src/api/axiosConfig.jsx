// src/api/axiosConfig.js
import axios from 'axios';

// We create a custom instance of Axios with our default settings
const axiosConfig = axios.create({
  // 1. The Base URL: Now you never have to type this again!
 baseURL: 'http://localhost:3000',
 // @ts-ignore
// baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  
});

export default axiosConfig;