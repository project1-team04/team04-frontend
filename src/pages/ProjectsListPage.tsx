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

const ProjectsListPage = () => {
  return (
    <div className='mx-auto flex flex-col'>
      <header className='my-9 flex items-center gap-5'>
        <Header children={'내 프로젝트'} />
        <Button variant='outline'>프로젝트 생성</Button>
      </header>

      {/* main 태그 없으면 Pagination의 margin-bottom이 무시됨 */}
      {/* flex 컨테이너 내부에서 자식 요소의 margin-bottom이 유지되도록 하기 위해 main 태그 추가 */}
      <main>
        <div className='grid grid-cols-3 gap-5'>
          {data.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              issue={project.issue}
              onClick={() => console.log(`${project.title} 클릭`)}
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
