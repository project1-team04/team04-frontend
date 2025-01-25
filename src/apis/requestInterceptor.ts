import { AxiosError, InternalAxiosRequestConfig } from 'axios';

const SOCIAL_LOGIN_TYPES = ['kakao', 'google', 'naver'];

// Access Token 없이 호출 가능한 API 엔드포인트 목록
const EXCLUDED_AUTH_ENDPOINTS = [
  '/auth/login',
  '/auth/signup',
  '/auth/verify',
  '/auth/verify-email',
  '/auth/reset-password',
  '/auth/refresh-token',
  ...SOCIAL_LOGIN_TYPES.flatMap((type) => [
    `/auth/${type}/login`,
    `/auth/${type}/login/callback`,
  ]),
];

// 요청 보낼 때 Authorization 헤더 자동 추가
export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('AccessToken');

  if (!config.url) return config;

  // Access Token이 필요하지 않은 API가 아니라면 Authorization 헤더 추가
  if (accessToken && !EXCLUDED_AUTH_ENDPOINTS.includes(config.url)) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

// 요청 에러 핸들러
export const requestRejectInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};
