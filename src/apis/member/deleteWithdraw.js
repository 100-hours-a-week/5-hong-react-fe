import { axiosInstance } from '@/apis/axiosInstance.js';

export const deleteWithdraw = async () => {
  const url = `/api/v1/members`;

  const { data } = await axiosInstance.delete(url);

  delete axiosInstance.defaults.headers.Authorization;

  return data;
};
