import Header from '@/components/Header';
import KanbanCard from '@/components/KanbanCard';
import IssueSearchBar from '@/components/IssueSearchBar';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const ProjectsDetailPage = () => {
  const { state } = useLocation();
  const projectDetails = state?.projectDetails;

  if (!projectDetails) {
    return <p>프로젝트 상세 정보가 없습니다.</p>;
  }

  return (
    <div className='flex w-full h-full'>
      <aside className='flex h-full w-[22%] flex-col overflow-hidden border-r border-divider-default p-4'>
        <IssueSearchBar />
        <Button
          className='w-24 text-xs'
          variant='negative'
          children='프로젝트 나가기'
        />
      </aside>

      <div className='flex flex-col px-6 grow'>
        <div className='flex items-center justify-between my-9'>
          <Header children={projectDetails.name} />
          <Button variant='outline'>이슈 생성</Button>
        </div>

        <div className='flex justify-between h-full overflow-hidden gap-x-6'>
          <KanbanCard status='To Do' issueCount='4' />
          <KanbanCard status='On Progress' issueCount='3' />
          <KanbanCard status='Done' issueCount='200' />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetailPage;
