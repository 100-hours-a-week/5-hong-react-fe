import api from '@/apis/core';

export const getCommentList = async (cursor, postId) => {
  const url = '/api/v1/comments';
  const params = { cursor, postId };
  const response = await api.get(url, { params });
  return {
    hasNext: response.hasNext,
    nextCursor: response.nextCursor,
    data: response.data,
  };
};

export const createComment = async (postId, commentInfo) => {
  const url = '/api/v1/comments';
  const data = { postId, ...commentInfo };
  const body = JSON.stringify(data);
  return await api.post(url, { body });
};

export const updateComment = async (commentId, commentInfo) => {
  const url = `/api/v1/comments/${commentId}`;
  const body = JSON.stringify(commentInfo);
  return await api.put(url, { body });
};

export const deleteComment = async (commentId) => {
  const url = `/api/v1/comments/${commentId}`;
  return await api.delete(url);
};
