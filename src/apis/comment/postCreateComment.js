import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postCreateComment = async (commentInfo) => {
  const { data } = await axiosInstance.post(END_POINTS.COMMENTS, {
    ...commentInfo,
  });
  return data;
};
