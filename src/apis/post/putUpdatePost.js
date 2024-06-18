import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const putUpdatePost = async (postId, postInfo) => {
  const { data } = await axiosInstance.put(END_POINTS.POSTS_ID(postId), {
    ...postInfo,
  });
  return data;
};
