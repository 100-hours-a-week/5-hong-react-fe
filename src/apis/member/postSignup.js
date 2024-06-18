import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postSignup = async (userInfo) => {
  const { data } = await axiosInstance.post(END_POINTS.SIGNUP, { ...userInfo });
  return data;
};
