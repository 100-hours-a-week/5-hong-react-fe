import { axiosInstance } from '@/apis/axiosInstance.js';

export const postCreatePost = async (postInfo) => {
  const url = `/api/v1/posts`;

  const { data } = await axiosInstance.post(url, { ...postInfo });
  return data;
};
