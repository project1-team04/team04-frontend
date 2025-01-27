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
import { useLocation, useNavigate } from 'react-router-dom';

const ProjectsListPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState(0); // 현재 페이지
  const [size] = useState(9); // 한 페이지 당 아이템 갯수
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지

  const fetchProjects = async (currentPage: number) => {
    try {
      const projectData = await getUserProjects(currentPage, size);
      setProjects(projectData.projects);

      setTotalPages(Math.ceil(projectData.totalProjects / size));
    } catch (error) {
      console.log('fetch 에러', error);
    }
  };

  useEffect(() => {
    fetchProjects(page);
  }, [page]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const pageNumber = parseInt(queryParams.get('page') || '0', 10);

    setPage(pageNumber);
  }, [location.search]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
      navigate(`?page=${newPage}&size=${size}`);
    }
  };

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
    <div className='mx-auto flex flex-col'>
      <header className='my-9 flex items-center gap-5'>
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
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 0}
                className={page === 0 ? 'text-gray-400' : ''}
              >
                <MdKeyboardArrowLeft />
              </button>
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href='#'
                  onClick={() => handlePageChange(i)}
                  className={page === i ? 'text-blue-500' : ''}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages - 1}
                className={page === totalPages - 1 ? 'text-gray-400' : ''}
              >
                <MdKeyboardArrowRight />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
};

export default ProjectsListPage;
