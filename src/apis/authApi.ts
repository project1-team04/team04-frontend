import instance from './instance';

interface LoginResponse {
  accessToken: string;
}

export const login = async () => {
  try {
    const res = await instance.post<LoginResponse>('auth/login', {
      email: 'hi563@naver.com',
      password: '!a12345678',
    });

    localStorage.setItem('AccessToken', res.data.accessToken);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

login();
