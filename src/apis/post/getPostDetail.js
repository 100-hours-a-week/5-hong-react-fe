import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const getPostDetail = async (postId) => {
  const { data } = await axiosInstance.get(END_POINTS.POSTS_ID(postId));
  return data;
};
