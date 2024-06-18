import { axiosInstance } from '@/apis/axiosInstance.js';

export const putUpdateComment = async (commentId, commentInfo) => {
  const url = `/api/v1/comments/${commentId}`;

  const { data } = await axiosInstance.put(url, { ...commentInfo });
  return data;
};
