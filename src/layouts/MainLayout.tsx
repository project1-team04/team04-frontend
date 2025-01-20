import HeaderComponent from '@/components/Header';
import NavigationComponent from '@/components/Navigation';
import { Outlet, useLocation, useMatch } from 'react-router-dom';
import { paths } from '../routers/paths';
import Search from '@/components/Search';
import { Button } from '@/components/ui/button';
import { useModalStore } from '@/stores/useModalStore';
import Modal from '@/components/Modal';
import { RiErrorWarningLine } from 'react-icons/ri';

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

  const { open, modalType } = useModalStore();

  return (
    <>
      <div className='flex h-[100vh] w-full flex-col'>
        <NavigationComponent name={'권보령'} alt={'프로필 사진'} />

        <div className='flex items-center justify-center flex-grow'>
          {isProjectDetailPage && (
            <aside className='flex h-[100%] w-[330px] flex-col border-r-[1px] border-divider-default'>
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
                <Button
                  className='ml-auto'
                  variant={'negative'}
                  size={'sm'}
                  onClick={() => open('warning')}
                >
                  프로젝트 삭제
                </Button>
              )}

              {isProjectDetailPage && (
                <div>
                  <Button className='ml-[800px]' variant={'outline'}>
                    이슈 생성
                  </Button>
                </div>
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
      {modalType === 'warning' && (
        <Modal
          title={'정말 삭제하시겠습니까?'}
          content={'삭제 후에는 되돌리기가 불가능합니다.'}
          icon={<RiErrorWarningLine className='h-[60px] w-[60px]' />}
          css={'text-sm mt-[-18px]'}
          buttons={[
            { text: '아니오', variantStyle: 'outline' },
            { text: '네', variantStyle: 'negative' },
          ]}
        />
      )}
    </>
  );
};

export default MainLayout;
