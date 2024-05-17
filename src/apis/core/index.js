import { API_BASE_URL } from '@/constants/baseConfig.js';

const request = async (url, { headers, body, ...options }) => {
  const params = options.params
    ? new URLSearchParams(options.params).toString()
    : '';
  const apiUrl = `${API_BASE_URL}${url}${params ? `?${params}` : ''}`;

  const response = await fetch(apiUrl, {
    ...options,
    body,
    headers:
      body instanceof FormData
        ? headers
        : {
            'Content-Type': 'application/json',
            ...headers,
          },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`[${options.method}] 요청 실패: ${response.status}`);
  }

  if (response.status === 204) {
    return;
  }
  return response.json();
};

const api = {
  get: (url, options) => request(url, { method: 'GET', ...options }),
  post: (url, options) => request(url, { method: 'POST', ...options }),
  put: (url, options) => request(url, { method: 'PUT', ...options }),
  patch: (url, options) => request(url, { method: 'PATCH', ...options }),
  delete: (url, options) => request(url, { method: 'DELETE', ...options }),
};

export default api;
