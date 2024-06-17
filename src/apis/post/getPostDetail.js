import { axiosInstance } from '@/apis/axiosInstance.js';

export const getPostDetail = async (postId) => {
  const url = `/api/v1/posts/${postId}`;

  const { data } = await axiosInstance.get(url);
  return data;
};
