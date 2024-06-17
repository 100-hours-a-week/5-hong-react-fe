import { axiosInstance } from '@/apis/axiosInstance.js';

export const postUploadImage = async (image) => {
  const url = `/api/v1/uploads/image`;
  const formData = new FormData();
  formData.append('file', image);

  const { data } = await axiosInstance.post(url, formData);
  return data;
};
