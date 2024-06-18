import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postCreatePost = async (postInfo) => {
  const { data } = await axiosInstance.post(END_POINTS.POSTS, { ...postInfo });
  return data;
};
