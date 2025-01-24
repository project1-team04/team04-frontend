import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getUserProjects, Project, getProjectsDetail } from '@/apis/projectApi';
import { useNavigate } from 'react-router-dom';

const ProjectsListPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getUserProjects();
        setProjects(projectData);
      } catch (error) {
        console.log('fetch 에러', error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = async (projectId: string) => {
    try {
      const projectDetails = await getProjectsDetail(projectId);
      console.log('프로젝트 상세 정보:', projectDetails);

      navigate(`/projects/${projectId}`, { state: { projectDetails } });
    } catch (error) {
      console.log('프로젝트 상세 정보 실패: ', error);
    }
  };

  return (
    <div className='flex flex-col mx-auto'>
      <header className='flex items-center gap-5 my-9'>
        <Header children={'내 프로젝트'} />
        <Button variant='outline' onClick={() => navigate('/projects/new')}>
          프로젝트 생성
        </Button>
      </header>

      <main>
        <div className='grid grid-cols-3 gap-5'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              issue={project.issueCount}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>

        <Pagination className='my-9'>
          <PaginationContent>
            <PaginationItem>
              <MdKeyboardArrowLeft href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <MdKeyboardArrowRight href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
};

export default ProjectsListPage;
