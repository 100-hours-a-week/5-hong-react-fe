import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postLogin = async (loginInfo) => {
  const { data } = await axiosInstance.post(END_POINTS.LOGIN, { ...loginInfo });

  axiosInstance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

  return data;
};
