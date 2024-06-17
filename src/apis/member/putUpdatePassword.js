import { axiosInstance } from '@/apis/axiosInstance.js';

export const putUpdatePassword = async (password) => {
  const url = `/api/v1/members/password`;

  const { data } = await axiosInstance.put(url, { ...password });
  return data;
};
