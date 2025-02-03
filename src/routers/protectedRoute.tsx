import { Outlet, redirect } from 'react-router-dom';
import { paths } from './paths';
import { getUser } from '@/apis/userApi';
import { decodeToken } from '@/utils/decodeToken';
import { TokenPayload } from '@/types/tokenTypes';

// TODO) 로그인 여부에 따라 루트 경로를 동적으로 리다이렉트
// TODO) 로그인 상태에서는 (토큰 존재할 때) 퍼블릭 경로로 이동 불가하도록 설정
export const protectedLoader = async () => {
  const token = localStorage.getItem('AccessToken');

  if (!token) {
    return redirect(paths.auth.login.fullPath);
  }

  try {
    const decoded: TokenPayload | null = decodeToken(token);

    if (!decoded) {
      return redirect(paths.auth.login.fullPath);
    }

    const userId = decoded.userId;
    const userResponse = await getUser();

    return { ...userResponse.data, userId };
  } catch (error) {
    return redirect(paths.auth.login.fullPath);
  }
};

const protectedRoute = () => {
  return <Outlet />;
};

export default protectedRoute;
