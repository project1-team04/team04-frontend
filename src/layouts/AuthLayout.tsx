import { Outlet } from 'react-router-dom';
import Logo from '@/components/Logo';
import AuthHeroBg from '../assets/auth-hero-bg.svg';
import AuthHeroIllu from '../assets/auth-hero-illustration.svg?react';

const AuthLayout = () => {
  return (
    <>
      <div className='flex h-[100vh] w-full'>
        <section
          className='flex w-1/2 flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12 text-white'
          style={{ backgroundImage: `url(${AuthHeroBg})` }}
        >
          <AuthHeroIllu className='h-auto max-h-[50%] max-w-full' />
          <div className='mt-8 flex flex-col gap-4'>
            <p className='text-center text-2xl font-semibold'>
              Collaboration & Issue Tracking
              <br />
              with Threadly
            </p>
            <p className='text-center text-sm'>
              팀원들과 실시간으로 소통하며 이슈를 관리해보세요.
            </p>
          </div>
        </section>

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
