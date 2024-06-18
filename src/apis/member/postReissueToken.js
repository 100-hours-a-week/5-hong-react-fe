import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postReissueToken = async () => {
  const { data } = await axiosInstance.post(END_POINTS.REISSUE);

  return data;
};
