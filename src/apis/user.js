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

// TODO: 직접 convert 하는게 아니라 request, response body 를 수정하거나 로직에서 수정해야함
export const signUpUser = async (userInfo) => {
  const url = '/api/v1/members/signup';
  const { image, ...rest } = userInfo;
  const data = { ...rest, profileImage: image }; // TODO: convert 문제 해결해야함
  const body = JSON.stringify(data);
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
