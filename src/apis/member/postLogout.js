import { axiosInstance } from '@/apis/axiosInstance.js';

export const postLogout = async () => {
  const url = `/api/v1/members/logout`;

  const { data } = await axiosInstance.post(url);

  delete axiosInstance.defaults.headers.Authorization;

  return data;
};
