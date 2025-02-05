import Header from '@/components/Header';
import KanbanCard from '@/components/KanbanCard';
import IssueSearchBar from '@/components/IssueSearchBar';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteProject, getMember } from '@/apis/projectApi';
import Modal from '@/components/Modal';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { useGetUser } from '@/hooks/useUser';
import { useModalStore, ModalType } from '@/stores/useModalStore';

interface ProjectMember {
  userId: number;
  userName: string;
  email: string;
  role: 'MANAGER' | 'MEMBER';
}

const ProjectsDetailPage = () => {
  const openModal = useModalStore((state) => state.open);
  const navigate = useNavigate();

  const { state } = useLocation();
  const projectDetails = state?.projectDetails;

  if (!projectDetails) {
    return <p>프로젝트 상세 정보가 없습니다.</p>;
  }

  // projectId -> 목록 페이지에서 들어가는 상세 페이지와 생성 페이지에서 이동되는 상세 페이지의 쿼리가 다름
  const { projectId: paramProjectId } = useParams();
  console.log(paramProjectId);

  const query = new URLSearchParams(location.search);
  const queryProjectId = query.get('projectId');
  console.log(queryProjectId);

  const projectId = paramProjectId || queryProjectId;
  console.log(projectId);

  const { data: user } = useGetUser();
  const [isManager, setIsManager] = useState(false);

  const handleDelete = async (projectId: number) => {
    try {
      await deleteProject(projectId);

      navigate('/projects');
    } catch (error) {
      console.log('프로젝트 삭제:', error);
    }
  };

  const fetchUsers = async (projectId: number) => {
    try {
      const res: ProjectMember[] = await getMember(projectId);
      console.log('프로젝트 모든 유저 조회:', res);

      const currentUser = res.find(
        (member) => member.userName === user.username
      );

      if (currentUser?.role === 'MANAGER') {
        setIsManager(true);
      }
    } catch (error) {
      console.log('프로젝트 모든 유저 조회 에러:', error);
    }
  };

  useEffect(() => {
    if (projectId !== null) {
      fetchUsers(Number(projectId));
    }
  }, [projectId]);

  return (
    <div className='flex h-full w-full'>
      <aside className='flex h-full w-[22%] flex-col overflow-hidden border-r border-divider-default p-4'>
        <IssueSearchBar />
        {!isManager && (
          <Button
            className='w-24 text-xs'
            variant='negative'
            children='프로젝트 나가기'
            onClick={() => {
              openModal(ModalType.DELETE_WARNING);
            }}
          />
        )}
      </aside>

      <div className='flex grow flex-col px-6'>
        <div className='my-9 flex items-center justify-between'>
          <div className='flex gap-4'>
            <Header children={projectDetails.name} />
            {isManager && (
              <Button
                variant='outline'
                className='border-none p-2'
                onClick={() => {
                  navigate(`/projects/${projectId}/settings`);
                }}
              >
                <IoSettingsOutline />
              </Button>
            )}
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
          { text: '아니오', variantStyle: 'outline' },
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
