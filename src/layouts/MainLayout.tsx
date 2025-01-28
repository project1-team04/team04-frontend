import { Outlet } from 'react-router-dom';
import Navigation from '@/layouts/Navigation';

const MainLayout = ({}) => {
  return (
    <div className='flex h-screen w-full flex-col'>
      <Navigation name={'권보령'} alt={'프로필 사진'} />
      <main className='flex h-full overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
