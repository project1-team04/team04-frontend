import axios from 'axios';
import instance from './instance';

// Access Token 만료 감지 및 자동 갱신
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Access Token이 만료되었고, 기존 요청이 재시도된 적 없을 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 무한루프 방지

      try {
        // 새로운 Access Token 발급 요청
        const refreshInstance = axios.create({
          baseURL: instance.defaults.baseURL, // 기존 axios instance의 baseURL 참조
          withCredentials: true, // 쿠키 포함 요청 허용
        });

        const { data } = await refreshInstance.get<{ accessToken: string }>(
          'auth/refresh-token'
        );

        // 새 Access Token 저장
        localStorage.setItem('AccessToken', data.accessToken);

        // 기존 요청 재시도
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
  }
);

export default instance;
