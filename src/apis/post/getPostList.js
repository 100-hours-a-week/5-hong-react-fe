import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const getPostList = async (cursor) => {
  const params = cursor ? { cursor } : null;

  const { data } = await axiosInstance.get(END_POINTS.POSTS, { params });
  return data;
};
