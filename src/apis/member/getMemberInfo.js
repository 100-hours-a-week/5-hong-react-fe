import { axiosInstance } from '@/apis/axiosInstance.js';

export const getMemberInfo = async () => {
  const url = '/api/v1/members/me';

  const { data } = await axiosInstance.get(url);
  console.log('getMemberInfo res :: ', data);

  return data;
};
