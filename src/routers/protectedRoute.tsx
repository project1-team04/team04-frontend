import { Outlet, redirect } from 'react-router-dom';
import { getUser } from '@/apis/userApi';
import { paths } from './paths';

// TODO) 로그인 여부에 따라 루트 경로를 동적으로 리다이렉트
// TODO) 로그인 상태에서는 (토큰 존재할 때) 퍼블릭 경로로 이동 불가하도록 설정
export const protectedLoader = async () => {
  try {
    if (window.location.pathname === paths.auth.login.fullPath) {
      return null; // getUser()를 실행하지 않도록 막음.
    }

    // api 호출
    const userResponse = await getUser();
    return userResponse.data;
  } catch (error) {
    return redirect(paths.auth.login.fullPath);
  }
  return null;
};

const protectedRoute = () => {
  return <Outlet />;
};

export default protectedRoute;
