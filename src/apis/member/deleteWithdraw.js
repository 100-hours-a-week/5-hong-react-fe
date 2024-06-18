import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const deleteWithdraw = async () => {
  const { data } = await axiosInstance.delete(END_POINTS.MEMBERS);

  delete axiosInstance.defaults.headers.Authorization;

  return data;
};
