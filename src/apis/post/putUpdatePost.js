import { axiosInstance } from '@/apis/axiosInstance.js';

export const putUpdatePost = async (postId, postInfo) => {
  const url = `/api/v1/posts/${postId}`;

  const { data } = await axiosInstance.put(url, { ...postInfo });
  return data;
};
