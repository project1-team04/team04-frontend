import HeaderComponent from '@/components/Header';
import NavigationComponent from '@/components/Navigation';
import { ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const path: Record<string, string> = {
    '/projects': '내 프로젝트',
    '/projects/new': '프로젝트 생성',
    '/profile/delegate': '프로젝트 권한 위임',
  };

  const headerTitle = path[location.pathname];

  return (
    <>
      <div className='flex h-[100vh] w-full flex-col'>
        <NavigationComponent name={'권보령'} alt={'프로필 사진'} />

        <div className='flex flex-grow items-center justify-center'>
          <div className='h-full w-[700px]'>
            <header className='ml-14 flex h-[120px] items-center'>
              <HeaderComponent children={headerTitle} />
            </header>
            <main>
              {/* <div>서치바</div> */}
              {children || <Outlet />}
              {/* <div>채팅</div> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
