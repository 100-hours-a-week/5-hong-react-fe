import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const putUpdatePassword = async (password) => {
  const { data } = await axiosInstance.put(END_POINTS.MEMBERS_PASSWORD, {
    ...password,
  });
  return data;
};
