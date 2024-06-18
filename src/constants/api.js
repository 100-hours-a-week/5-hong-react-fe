export const AXIOS_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const END_POINTS = {
  LOGIN: `/api/v1/members/login`,
  LOGOUT: `/api/v1/members/logout`,
  REISSUE: `/api/v1/members/reissue`,
  SIGNUP: `/api/v1/members/signup`,
  MEMBERS: `/api/v1/members`,
  MEMBERS_ME: `/api/v1/members/me`,
  MEMBERS_EMAIL: `/api/v1/members/email`,
  MEMBERS_NICKNAME: `/api/v1/members/nickname`,
  MEMBERS_PASSWORD: `/api/v1/members/password`,
  POSTS: `/api/v1/posts`,
  POSTS_ID: (postId) => `/api/v1/posts/${postId}`,
  COMMENTS: `/api/v1/comments`,
  COMMENTS_ID: (commentId) => `/api/v1/comments/${commentId}`,
  UPLOADS_IMAGE: `/api/v1/uploads/image`,
};

export const NETWORK = {
  TIMEOUT: 5000, //5초
};
