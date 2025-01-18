import ProjectCardComponent from '@/components/ProjectCard';

const ProjectsListPage = () => {
  const data = [
    { id: '1', title: 'Threadly', issue: 1 },
    { id: '2', title: 'Day6', issue: 2 },
    { id: '3', title: 'Bee', issue: 3 },
    { id: '4', title: 'Project X', issue: 4 },
    { id: '5', title: 'Alpha', issue: 5 },
    { id: '6', title: 'Beta', issue: 6 },
    { id: '7', title: 'Gamma', issue: 7 },
    { id: '8', title: 'Delta', issue: 8 },
    { id: '9', title: 'Epsilon', issue: 9 },
  ];

  return (
    <>
      <div className='grid grid-cols-3 gap-5'>
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
