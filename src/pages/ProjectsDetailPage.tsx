import KanbanCard from '@/components/KanbanCard';

const ProjectsDetailPage = () => {
  return (
    <>
      <div className='flex h-full gap-6'>
        <KanbanCard status={'To Do'} issueCount={'4'} />
        <KanbanCard status={'On Progress'} issueCount={'3'} />
        <KanbanCard status={'Done'} issueCount={'2'} />
      </div>
    </>
  );
};

export default ProjectsDetailPage;
