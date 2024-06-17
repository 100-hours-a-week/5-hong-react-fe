import { axiosInstance } from '@/apis/axiosInstance.js';

// FIXME: 일단 임시로 닉네임만
export const putUpdateProfile = async (updateInfo) => {
  const url = `/api/v1/members/nickname`;

  const { data } = await axiosInstance.put(url, { ...updateInfo });
  return data;
};
