import { AxiosError } from 'axios';
import instance from './instance';

interface LoginResponse {
  accessToken: string;
}

export const login = async (email: string, password: string) => {
  try {
    const res = await instance.post<LoginResponse>('auth/login', {
      email,
      password,
    });

    localStorage.setItem('AccessToken', res.data.accessToken);
    return { success: true };
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.status === 403) {
      return {
        success: false,
        message: '가입되지 않았거나 올바르지 않은 계정입니다.',
      };
    }

    return {
      success: false,
      message: '로그인 중 예상치 못한 오류가 발생했습니다.',
      error,
    };
  }
};

export const logout = async () => {
  try {
    await instance.post('/auth/logout');

    localStorage.removeItem('AccessToken');
    console.log('로그아웃 완료');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
