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
    console.log('로그인 성공', res, res.data);
    return { success: true };
  } catch (error) {
    console.error('Login failed:', error);
    return { success: false, error };
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
