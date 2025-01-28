import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { PUBLIC_API_ENDPOINTS } from './publicEndpoints';

// 요청 보낼 때 Authorization 헤더 자동 추가
export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('AccessToken');

  if (!config.url) return config;

  // Access Token이 필요하지 않은 API가 아니라면 Authorization 헤더 추가
  if (accessToken && !PUBLIC_API_ENDPOINTS.includes(config.url)) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

// 요청 에러 핸들러
export const requestRejectInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};
