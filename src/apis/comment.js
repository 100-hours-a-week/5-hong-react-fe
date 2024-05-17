import api from '@/apis/core';

export const getCommentList = async (page, postsId) => {
  const url = '/api/v1/comments';
  const params = { page, postsId };
  const response = await api.get(url, { params });
  return {
    hasNext: response.hasNext,
    nextPage: response.nextPage,
    data: response.data,
  };
};

export const createComment = async (postsId, commentInfo) => {
  const url = '/api/v1/comments';
  const data = { postsId, ...commentInfo };
  const body = JSON.stringify(data);
  return await api.post(url, { body });
};

export const updateComment = async (commentsId, commentInfo) => {
  const url = `/api/v1/comments/${commentsId}`;
  const body = JSON.stringify(commentInfo);
  return await api.put(url, { body });
};

export const deleteComment = async (commentsId) => {
  const url = `/api/v1/comments/${commentsId}`;
  return await api.delete(url);
};
