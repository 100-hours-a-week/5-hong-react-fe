import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const deleteComment = async (commentId) => {
  const { data } = await axiosInstance.delete(
    END_POINTS.COMMENTS_ID(commentId),
  );
  return data;
};
