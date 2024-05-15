import api from '@/apis/core';

export const getPostList = async (page) => {
  const url = '/api/v1/posts';
  const params = { page };
  const response = await api.get(url, { params });
  return {
    hasNext: response.hasNext,
    nextPage: response.nextPage,
    data: response.data,
  };
};
