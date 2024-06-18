import { axiosInstance } from '@/apis/axiosInstance.js';

export const getCommentList = async (cursor, postId) => {
  const url = `/api/v1/comments`;
  const params = cursor ? { cursor, postId } : { postId };

  const { data } = await axiosInstance.get(url, { params });
  return data;
};
