import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postCheckEmail = async (email) => {
  const { data } = await axiosInstance.post(END_POINTS.MEMBERS_EMAIL, {
    ...email,
  });
  return data;
};
