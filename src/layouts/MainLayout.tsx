import { Outlet, useLoaderData } from 'react-router-dom';
import Navigation from '@/layouts/Navigation';
import CustomModal from '@/components/CustomModal';
import { UserData } from '@/types/userTypes';

const MainLayout = ({}) => {
  const data = useLoaderData() as UserData;
  console.log('메인레이아웃', data);

  return (
    <div className='flex h-screen w-full flex-col'>
      <Navigation />
      <main className='flex h-full overflow-y-auto'>
        <Outlet context={{ data }} />
      </main>

      <CustomModal />
    </div>
  );
};

export default MainLayout;
