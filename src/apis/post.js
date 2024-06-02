import api from '@/apis/core';

export const getPostList = async (cursor) => {
  const url = '/api/v1/posts';
  const params = { cursor };
  const response = await api.get(url, { params });
  return {
    hasNext: response.hasNext,
    nextCursor: response.nextCursor,
    data: response.data,
  };
};

export const getPostDetail = async (postId) => {
  const url = `/api/v1/posts/${postId}`;
  return await api.get(url);
};

export const createPost = async (postInfo) => {
  const url = '/api/v1/posts';
  const body = JSON.stringify(postInfo);
  return await api.post(url, { body });
};

export const updatePost = async (postId, postInfo) => {
  const url = `/api/v1/posts/${postId}`;
  const body = JSON.stringify(postInfo);
  return await api.put(url, { body });
};

export const deletePost = async (postId) => {
  const url = `/api/v1/posts/${postId}`;
  return await api.delete(url);
};
