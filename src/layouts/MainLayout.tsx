import { Outlet } from 'react-router-dom';
import Navigation from '@/layouts/Navigation';
import CustomModal from '@/components/CustomModal';

const MainLayout = () => {
  return (
    <div className='flex h-screen w-full flex-col'>
      <Navigation />
      <main className='flex h-full overflow-y-auto'>
        <Outlet />
      </main>

      <CustomModal />
    </div>
  );
};

export default MainLayout;
