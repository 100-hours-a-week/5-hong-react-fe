import { axiosInstance } from '@/apis/axiosInstance.js';

export const deleteComment = async (commentId) => {
  const url = `/api/v1/comments/${commentId}`;

  const { data } = await axiosInstance.delete(url);
  return data;
};
