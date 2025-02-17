import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import instance from './instance';
import { PUBLIC_API_ENDPOINTS } from './publicEndpoints';
import { paths } from '@/routers/paths';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// 정상 응답 처리 인터셉터
export const responseInterceptor = (response: AxiosResponse) => response;

// Access Token 만료 시 응답 처리 인터셉터
export const responseRejectInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config as CustomAxiosRequestConfig;

  // Access Token이 만료되었고, 기존 요청이 재시도된 적 없을 경우
  if (
    error.response?.status === 401 &&
    originalRequest &&
    !originalRequest._retry
  ) {
    // Access Token 필요 없는 API에서 401 에러 발생 시 토큰 갱신하지 않고 그대로 반환
    // 각 API에서 401 에러 처리
    if (PUBLIC_API_ENDPOINTS.includes(originalRequest.url ?? '')) {
      return Promise.reject(error);
    }

    originalRequest._retry = true; // 무한루프 방지

    try {
      // 새로운 Access Token 발급 요청
      const { data } = await axios.get<{ accessToken: string }>(
        '/api/auth/refresh-token',
        { withCredentials: true }
      );

      // 새 Access Token 저장
      localStorage.setItem('AccessToken', data.accessToken);

      // 기존 요청의 Authorization 헤더를 새 Access Token으로 업데이트한 후 재요청
      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
      return instance(originalRequest);
    } catch (refreshError) {
      console.error('토큰 갱신 실패:', refreshError);

      // 리프레시 토큰도 만료된 경우 로그아웃 처리
      localStorage.removeItem('AccessToken');
      window.location.href = paths.auth.login.fullPath;

      return Promise.reject(refreshError);
    }
  }
  return Promise.reject(error);
};
