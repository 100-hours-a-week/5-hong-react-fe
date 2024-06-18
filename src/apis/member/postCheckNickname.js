import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postCheckNickname = async (nickname) => {
  const { data } = await axiosInstance.post(END_POINTS.MEMBERS_NICKNAME, {
    ...nickname,
  });
  return data;
};
