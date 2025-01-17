import HeaderComponent from '@/components/Header';
import NavigationComponent from '@/components/Navigation';
import { ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const headerPath: Record<string, string> = {
    '/projects': '내 프로젝트',
    '/projects/new': '프로젝트 생성',
    '/profile/delegate': '프로젝트 권한 위임',
  };

  const headerTitle = headerPath[location.pathname];

  return (
    <>
      <div className='h-[100vh] w-full'>
        <NavigationComponent name={'권보령'} alt={'프로필 사진'} />
        <HeaderComponent children={headerTitle} />
        {children || <Outlet />}
      </div>
    </>
  );
};

export default MainLayout;
