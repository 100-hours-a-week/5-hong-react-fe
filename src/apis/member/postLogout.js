import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postLogout = async () => {
  const { data } = await axiosInstance.post(END_POINTS.LOGOUT);

  delete axiosInstance.defaults.headers.Authorization;

  return data;
};
