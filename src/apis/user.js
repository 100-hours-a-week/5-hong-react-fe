import api from '@/apis/core';

export const loginUser = async (loginInfo) => {
  const url = '/api/v1/members/login';
  const body = JSON.stringify(loginInfo);
  return await api.post(url, { body });
};
