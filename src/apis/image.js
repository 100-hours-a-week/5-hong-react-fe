import api from '@/apis/core';

export const uploadImage = async (image) => {
  const url = '/api/v1/uploads/image';
  const formData = new FormData();
  formData.append('file', image);
  return await api.post(url, { body: formData });
};
