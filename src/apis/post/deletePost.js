import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const deletePost = async (postId) => {
  const { data } = await axiosInstance.delete(END_POINTS.POSTS_ID(postId));
  return data;
};
