import { axiosInstance } from '@/apis/axiosInstance.js';

export const getPostList = async (cursor) => {
  const url = `/api/v1/posts`;
  const params = cursor ? { cursor } : null;

  const { data } = await axiosInstance.get(url, { params });
  return data;
};
