import Logo from '@/components/Logo';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <div className='flex h-[100vh] w-full'>
        <aside className='w-1/2 bg-purple' />

        <div className='flex w-1/2 flex-col items-center justify-center'>
          <header className='flex flex-col items-center gap-4'>
            <Logo variant='authLogo' />
            <p className='text-sm text-text-sub'>
              팀원들과 실시간으로 프로젝트를 관리해보세요.
            </p>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
