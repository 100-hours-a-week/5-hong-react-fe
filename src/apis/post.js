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

export const getPostDetail = async (postsId) => {
  const url = `/api/v1/posts/${postsId}`;
  return await api.get(url);
};

export const createPost = async (postInfo) => {
  const url = '/api/v1/posts';
  const data = { ...postInfo };
  const body = JSON.stringify(data);
  return await api.post(url, { body });
};

export const updatePost = async (postsId, postInfo) => {
  const url = `/api/v1/posts/${postsId}`;
  const data = { ...postInfo };
  const body = JSON.stringify(data);
  return await api.put(url, { body });
};

export const deletePost = async (postsId) => {
  const url = `/api/v1/posts/${postsId}`;
  return await api.delete(url);
};
