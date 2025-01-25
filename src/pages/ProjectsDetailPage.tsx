import Header from '@/components/Header';
import KanbanCard from '@/components/KanbanCard';
import IssueSearchBar from '@/components/IssueSearchBar';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteProject } from '@/apis/projectApi';

const ProjectsDetailPage = () => {
  const { state } = useLocation();
  const projectDetails = state?.projectDetails;

  if (!projectDetails) {
    return <p>프로젝트 상세 정보가 없습니다.</p>;
  }

  const navigate = useNavigate();
  const { projectId: paramProjectId } = useParams();

  const query = new URLSearchParams(location.search);
  const queryProjectId = query.get('projectId');

  const projectId = paramProjectId || queryProjectId;

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
        <Button
          className='w-24 text-xs'
          variant='negative'
          children='프로젝트 나가기'
          onClick={() => handleDelete(Number(projectId))}
        />
      </aside>

      <div className='flex grow flex-col px-6'>
        <div className='my-9 flex items-center justify-between'>
          <Header children={projectDetails.name} />
          <Button
            variant='outline'
            onClick={() => {
              navigate(`/projects/:${projectId}/issues/:issueId`);
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
    </div>
  );
};

export default ProjectsDetailPage;
