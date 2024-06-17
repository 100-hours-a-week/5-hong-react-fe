import { axiosInstance } from '@/apis/axiosInstance.js';

export const postCheckEmail = async (email) => {
  const url = `/api/v1/members/email`;

  const { data } = await axiosInstance.post(url, { ...email });
  return data;
};
