import HeaderComponent from '@/components/Header';
import NavigationComponent from '@/components/Navigation';
import { ReactNode } from 'react';
import { Outlet, useLocation, useMatch } from 'react-router-dom';

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const path: Record<string, string> = {
    '/projects': '내 프로젝트',
    '/projects/new': '프로젝트 생성',
    '/profile/delegate': '프로젝트 권한 위임',
  };

  const headerTitle = path[location.pathname];

  // 특정 경로 매칭: /projects/:projectId
  // const isProjectDetailPage = useMatch('/projects/:projectId');

  // 임시로 /profile, /profile/delegate 페이지로 설정
  const isProjectDetailPage = useMatch('/profile');
  const isProjectsIssueDetailPage = useMatch('/profile/delegate');

  return (
    <>
      <div className='flex h-[100vh] w-full flex-col'>
        <NavigationComponent name={'권보령'} alt={'프로필 사진'} />

        <div className='flex flex-grow items-center justify-center'>
          {isProjectDetailPage && (
            <div className='h-[100%] w-[400px] bg-purple'>서치바</div>
          )}

          <div
            className={`flex h-full ${
              isProjectDetailPage || isProjectsIssueDetailPage
                ? 'w-full'
                : 'w-[800px]'
            } flex-col bg-orange`}
          >
            <header className='ml-14 flex h-[110px] items-center'>
              <HeaderComponent children={headerTitle} />
            </header>

            <main className='flex-grow bg-red'>
              <Outlet />
            </main>
          </div>

          {isProjectsIssueDetailPage && (
            <div className='h-[100%] w-[600px] bg-purple'>채팅</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
