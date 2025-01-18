import ProjectCardComponent from '@/components/ProjectCard';

const ProjectsListPage = () => {
  const data = [
    { id: '1', title: 'Threadly', issue: 1 },
    { id: '2', title: 'Day6', issue: 2 },
    { id: '3', title: 'Bee', issue: 3 },
  ];

  return (
    <>
      <div className='grid grid-cols-3 gap-4 p-4'>
        {data.map((project) => (
          <ProjectCardComponent
            key={project.id}
            title={project.title}
            issue={project.issue}
            onClick={() => console.log(`${project.title} 클릭`)}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsListPage;
