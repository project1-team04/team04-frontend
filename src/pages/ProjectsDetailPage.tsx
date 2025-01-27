import Header from '@/components/Header';
import KanbanCard from '@/components/KanbanCard';
import IssueSearchBar from '@/components/IssueSearchBar';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteProject } from '@/apis/projectApi';
import Modal from '@/components/Modal';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { useModalStore, ModalType } from '@/stores/useModalStore';

const ProjectsDetailPage = () => {
  const { open, close } = useModalStore();

  const { state } = useLocation();
  const projectDetails = state?.projectDetails;

  const projectId = projectDetails.id;
  console.log(projectId);

  if (!projectDetails) {
    return <p>프로젝트 상세 정보가 없습니다.</p>;
  }

  const navigate = useNavigate();
  // const { projectId: paramProjectId } = useParams();
  // console.log(paramProjectId);

  // const query = new URLSearchParams(location.search);
  // const queryProjectId = query.get('projectId');
  // console.log(queryProjectId);

  // const projectId = paramProjectId || queryProjectId;
  // console.log(projectId);

  const handleDelete = async (projectId: number) => {
    try {
      await deleteProject(projectId);

      navigate('/projects');
    } catch (error) {
      console.log('프로젝트 삭제:', error);
    }
  };

  return (
    <div className='flex h-full w-full'>
      <aside className='flex h-full w-[22%] flex-col overflow-hidden border-r border-divider-default p-4'>
        <IssueSearchBar />
        {/* 초대된 유저(일반 유저)만 보임 */}
        {/* <Button
          className='w-24 text-xs'
          variant='negative'
          children='프로젝트 나가기'
          onClick={() => {
            open(ModalType.DELETE_WARNING);
          }}
        /> */}
      </aside>

      <div className='flex grow flex-col px-6'>
        <div className='my-9 flex items-center justify-between'>
          <div className='flex gap-4'>
            <Header children={projectDetails.name} />
            <Button
              variant='outline'
              className='border-none p-2'
              onClick={() => {
                navigate(`/projects/${projectId}/settings`);
              }}
            >
              <IoSettingsOutline />
            </Button>
          </div>
          <Button
            variant='outline'
            onClick={() => {
              navigate(`/projects/${projectId}/issues/:issueId`);
            }}
          >
            이슈 생성
          </Button>
        </div>

        <div className='flex h-full justify-between gap-x-6 overflow-hidden'>
          <KanbanCard status='To Do' issueCount='4' />
          <KanbanCard status='On Progress' issueCount='3' />
          <KanbanCard status='Done' issueCount='200' />
        </div>
      </div>

      <Modal
        title={'정말 삭제하시겠습니까?'}
        content={'삭제 후에는 되돌리기가 불가능합니다.'}
        icon={<RiErrorWarningLine className='h-[60px] w-[60px]' />}
        css={'text-sm mt-[-18px]'}
        buttons={[
          { text: '아니오', variantStyle: 'outline', onClick: close },
          {
            text: '네',
            variantStyle: 'negative',
            onClick: () => handleDelete(Number(projectId)),
          },
        ]}
      />
    </div>
  );
};

export default ProjectsDetailPage;
