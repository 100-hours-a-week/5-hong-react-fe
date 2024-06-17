import { axiosInstance } from '@/apis/axiosInstance.js';

export const postCheckNickname = async (nickname) => {
  const url = `/api/v1/members/nickname`;

  const { data } = await axiosInstance.post(url, { ...nickname });
  return data;
};
