import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

// FIXME: 일단 임시로 닉네임만
export const putUpdateProfile = async (updateInfo) => {
  const { data } = await axiosInstance.put(END_POINTS.MEMBERS_NICKNAME, {
    ...updateInfo,
  });
  return data;
};
