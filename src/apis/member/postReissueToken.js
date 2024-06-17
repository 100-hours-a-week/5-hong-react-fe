import { axiosInstance } from '@/apis/axiosInstance.js';

export const postReissueToken = async () => {
  const url = `/api/v1/members/reissue`;

  const { data } = await axiosInstance.post(url);

  return data;
};
