import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const getCommentList = async (cursor, postId) => {
  const params = cursor ? { cursor, postId } : { postId };

  const { data } = await axiosInstance.get(END_POINTS.COMMENTS, { params });
  return data;
};
