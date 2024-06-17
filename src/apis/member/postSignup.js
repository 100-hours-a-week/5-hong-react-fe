import { axiosInstance } from '@/apis/axiosInstance.js';

export const postSignup = async (userInfo) => {
  const url = `/api/v1/members/signup`;

  const { data } = await axiosInstance.post(url, { ...userInfo });
  return data;
};
