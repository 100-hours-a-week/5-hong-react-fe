import axios from 'axios';

import { API_BASE_URL } from '@/constants/baseConfig.js';
import { handleTokenError } from '@/apis/interceptors.js';

// TODO: 상수 관리

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // 5초
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError, // 응답 에러는 handleTokenError 에서 처리
);
