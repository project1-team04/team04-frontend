import Logo from '@/components/Logo';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <div className='flex h-[100vh] w-full'>
        <aside className='w-1/2 bg-purple' />

        <div className='flex w-1/2 flex-col'>
          <header className='flex h-[25%] items-end justify-center'>
            <Logo variant='authLogo' />
          </header>

          <main className='grow'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
