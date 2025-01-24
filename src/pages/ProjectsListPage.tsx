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
import { getUserProjects } from '@/apis/projectApi';

const ProjectsListPage = () => {
  const [projects, setProjects] = useState([]);

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

  return (
    <div className='flex flex-col mx-auto'>
      <header className='flex items-center gap-5 my-9'>
        <Header children={'내 프로젝트'} />
        <Button variant='outline'>프로젝트 생성</Button>
      </header>

      <main>
        <div className='grid grid-cols-3 gap-5'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              issue={project.issueCount}
              onClick={() => console.log(`${project.name} 클릭`)}
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
