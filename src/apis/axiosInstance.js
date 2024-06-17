import axios from 'axios';

import { API_BASE_URL } from '@/constants/baseConfig.js';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // 5초
  withCredentials: true,
});
