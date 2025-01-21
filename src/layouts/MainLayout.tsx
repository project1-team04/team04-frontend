import Header from '@/components/Header';
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

  return (
    <>
      <div className='flex h-screen w-full flex-col'>
        <NavigationComponent name={'권보령'} alt={'프로필 사진'} />

        <div className=''>
          <div
            className='flex-grow items-center justify-center'
            // className={`flex h-full ${
            //   isProjectDetailPage || isProjectsIssueDetailPage
            //     ? 'w-full'
            //     : 'w-[50rem]'
            // } flex-col`}
          >
            {/* <header className='flex items-center ml-14 h-28'>
              <Header children={headerTitle ?? headerDetailTitle} />
              {headerTitle === '프로젝트 설정' && (
                <Button className='ml-auto' variant={'negative'} size={'sm'}>
                  프로젝트 삭제
                </Button>
              )}
            </header> */}

            <main className='flex-grow'>
              <Outlet />
            </main>
          </div>

          {isProjectsIssueDetailPage && (
            <aside className='h-full w-[37.5rem]'>채팅</aside>
          )}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
