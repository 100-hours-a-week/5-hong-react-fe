import { axiosInstance } from '@/apis/axiosInstance.js';

export const postLogin = async (loginInfo) => {
  const url = '/api/v1/members/login';

  const { data } = await axiosInstance.post(url, { ...loginInfo });

  axiosInstance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

  return data;
};
