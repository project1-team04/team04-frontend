import instance from './instance';

interface LoginResponse {
  accessToken: string;
}

export const login = async () => {
  try {
    const response = await instance.post<LoginResponse>('auth/login', {
      email: 'hi563@naver.com',
      password: '!a12345678',
    });

    console.log(response);

    console.log('Access Token:', response.data.accessToken);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

login();
