import Logo from '@/components/Logo';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <div className='flex h-[100vh] w-full'>
        <div className='w-1/2 bg-purple'>왼쪽 부분</div>

        <div className='flex w-1/2 flex-col'>
          <div className='flex h-[25%] items-end justify-center'>
            <Logo variant='loginLogo' />
          </div>

          <div className='h-4/5'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
