import Navigation from '@/components/Navigation';
import { Outlet } from 'react-router-dom';

const MainLayout = ({}) => {
  return (
    <>
      <div className='flex h-screen w-full flex-col'>
        <Navigation name={'권보령'} alt={'프로필 사진'} />

        <div className='flex flex-grow items-center justify-center'>
          <main className='flex-grow'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
