import HeaderComponent from '@/components/Header';
import NavigationComponent from '@/components/Navigation';
import { Outlet, useLocation, useMatch } from 'react-router-dom';
import { paths } from '../routers/paths';
import Search from '@/components/Search';
import { Button } from '@/components/ui/button';

const MainLayout = ({}) => {
  const location = useLocation();

  const path: Record<string, string> = {
    [paths.projects.root]: '내 프로젝트',
    [paths.projects.new.fullPath]: '프로젝트 생성',
    [paths.projects.settings.fullPath]: '프로젝트 설정',
    [paths.profile.delegate.fullPath]: '프로젝트 권한 위임',
  };

  const headerTitle = path[location.pathname];

  // 특정 경로 매칭: /projects/:projectId
  const isProjectDetailPage =
    useMatch(paths.projects.detail.fullPath)?.params?.projectId &&
    location.pathname !== paths.projects.new.fullPath;

  const isProjectsIssueDetailPage = useMatch(
    paths.projects.issueDetail.fullPath
  );

  // 임시 프로젝트명(data)
  const projectName = 'Threadly';

  return (
    <>
      <div className='flex h-[100vh] w-full flex-col'>
        <NavigationComponent name={'권보령'} alt={'프로필 사진'} />

        <div className='flex flex-grow items-center justify-center'>
          {isProjectDetailPage && (
            <aside className='flex h-[100%] w-[400px] flex-col'>
              <Search />
              <Button
                className='m-4 w-[90px] text-xs'
                variant={'negative'}
                children={'프로젝트 나가기'}
              />
            </aside>
          )}

          <div
            className={`flex h-full ${
              isProjectDetailPage || isProjectsIssueDetailPage
                ? 'w-full'
                : 'w-[800px]'
            } flex-col`}
          >
            <header className='ml-14 flex h-[110px] items-center'>
              <HeaderComponent children={projectName || headerTitle} />
              {headerTitle === '프로젝트 설정' && (
                <Button className='ml-auto' variant={'negative'} size={'sm'}>
                  프로젝트 삭제
                </Button>
              )}

              {isProjectDetailPage && (
                <Button className='ml-[770px]' variant={'outline'}>
                  이슈 생성
                </Button>
              )}
            </header>

            <main className='flex-grow'>
              <Outlet />
            </main>
          </div>

          {isProjectsIssueDetailPage && (
            <aside className='h-[100%] w-[600px]'>채팅</aside>
          )}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
