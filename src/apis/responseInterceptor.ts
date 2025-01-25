import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import instance from './instance';

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

      // 로그아웃 처리
      localStorage.removeItem('AccessToken');
      // TODO) 로그인 페이지로 이동

      return Promise.reject(refreshError);
    }
  }
  return Promise.reject(error);
};
