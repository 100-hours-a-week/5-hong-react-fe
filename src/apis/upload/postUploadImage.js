import { axiosInstance } from '@/apis/axiosInstance.js';

import { END_POINTS } from '@/constants/api.js';

export const postUploadImage = async (image) => {
  const formData = new FormData();
  formData.append('file', image);

  const { data } = await axiosInstance.post(END_POINTS.UPLOADS_IMAGE, formData);
  return data;
};
