import { axiosInstance } from '@/apis/axiosInstance.js';

export const deletePost = async (postId) => {
  const url = `/api/v1/posts/${postId}`;

  const { data } = await axiosInstance.delete(url);
  return data;
};
