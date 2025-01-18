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
