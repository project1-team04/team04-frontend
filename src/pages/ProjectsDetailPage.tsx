import Header from '@/components/Header';
import KanbanCard from '@/components/KanbanCard';
import Search from '@/components/Search';
import { Button } from '@/components/ui/button';

const headerDetailTitle = 'Threadly';

const ProjectsDetailPage = () => {
  return (
    <div className='flex h-[90vh]'>
      <aside className='flex w-[22%] flex-col border-r border-divider-default p-4'>
        <Search />
        <Button
          className='w-24 text-xs'
          variant='negative'
          children='프로젝트 나가기'
        />
      </aside>

      <div className='flex w-[78%] flex-col'>
        <header className='flex h-28 items-center justify-between px-20'>
          <Header children={headerDetailTitle} />
          <Button variant='outline'>이슈 생성</Button>
        </header>

        <div className='flex h-full gap-6 px-6 pt-6'>
          <KanbanCard status='To Do' issueCount='4' />
          <KanbanCard status='On Progress' issueCount='3' />
          <KanbanCard status='Done' issueCount='2' />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetailPage;
