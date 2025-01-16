import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    // Layout 및 Outlet 렌더링 확인을 위해 임시 스타일 적용
    // TODO: 라우팅 작업 완료시 스타일 제거
    <div className='bg-orange h-[100vh] w-full'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
