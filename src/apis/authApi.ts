import instance from './instance';

interface LoginResponse {
  accessToken: string;
}

// TODO) react-hook-form 적용 후 params 수정
// TODO) 로그인 여부에 따른 라우팅
export const login = async (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string
) => {
  e.preventDefault();

  try {
    const res = await instance.post<LoginResponse>('auth/login', {
      email,
      password,
    });

    localStorage.setItem('AccessToken', res.data.accessToken);
    console.log('로그인 성공', res, res.data);
  } catch (error) {
    console.error('Login failed:', error);
  }
};
