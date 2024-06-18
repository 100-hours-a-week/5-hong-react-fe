import { axiosInstance } from '@/apis/axiosInstance.js';

export const postCreateComment = async (commentInfo) => {
  const url = `/api/v1/comments`;

  const { data } = await axiosInstance.post(url, { ...commentInfo });
  return data;
};
