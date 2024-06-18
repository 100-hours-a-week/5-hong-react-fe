import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const putUpdateComment = async (commentId, commentInfo) => {
  const { data } = await axiosInstance.put(END_POINTS.COMMENTS_ID(commentId), {
    ...commentInfo,
  });
  return data;
};
