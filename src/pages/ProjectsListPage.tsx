import ProjectCardComponent from '@/components/ProjectCard';

const ProjectsListPage = () => {
  const data = [
    { id: '1', title: 'Threadly', issue: 1 },
    { id: '2', title: 'Day6', issue: 2 },
    { id: '3', title: 'Bee', issue: 3 },
  ];

  return (
    <>
      <ProjectCardComponent
        title={''}
        issue={0}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
};

export default ProjectsListPage;
