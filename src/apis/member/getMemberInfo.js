import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const getMemberInfo = async () => {
  const { data } = await axiosInstance.get(END_POINTS.MEMBERS_ME);
  console.log('getMemberInfo res :: ', data);

  return data;
};
