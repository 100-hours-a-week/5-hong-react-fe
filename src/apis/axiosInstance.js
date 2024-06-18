import axios from 'axios';

import { AXIOS_BASE_URL, NETWORK } from '@/constants/api.js';
import { handleTokenError } from '@/apis/interceptors.js';

export const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError, // 응답 에러는 handleTokenError 에서 처리
);
