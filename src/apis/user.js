import api from '@/apis/core';

export const getUserInfo = async () => {
  const url = '/api/v1/members';
  return await api.get(url);
};

export const loginUser = async (loginInfo) => {
  const url = '/api/v1/members/login';
  const body = JSON.stringify(loginInfo);
  return await api.post(url, { body });
};

export const signUpUser = async (userInfo) => {
  const url = '/api/v1/members/signup';
  const body = JSON.stringify(userInfo);
  return await api.post(url, { body });
};

export const logoutUser = async () => {
  const url = '/api/v1/members/logout';
  return await api.post(url);
};

export const validateEmail = async (email) => {
  const url = '/api/v1/members/email';
  const body = JSON.stringify(email);
  return await api.post(url, { body });
};

export const validateNickname = async (nickname) => {
  const url = '/api/v1/members/nickname';
  const body = JSON.stringify(nickname);
  return await api.post(url, { body });
};

export const updatePassword = async (password) => {
  const url = '/api/v1/members/password';
  const body = JSON.stringify(password);
  return await api.put(url, { body });
};

export const updateProfile = async (updateInfo) => {
  const url = '/api/v1/members/profile';
  const body = JSON.stringify(updateInfo);
  return await api.patch(url, { body });
};

export const withdrawUser = async () => {
  const url = '/api/v1/members';
  return await api.delete(url);
};
