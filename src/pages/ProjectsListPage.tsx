import ProjectCard from '@/components/ProjectCard';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

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
    <div className='m-auto w-[50%]'>
      <div className='flex w-[78%] flex-col'>
        <div className='flex h-28 items-center gap-5 px-20'>
          <Header children={'내 프로젝트'} />
          <Button variant='outline'>프로젝트 생성</Button>
        </div>

        <div className='grid grid-cols-3 gap-x-44 gap-y-5'>
          {data.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              issue={project.issue}
              onClick={() => console.log(`${project.title} 클릭`)}
            />
          ))}
        </div>

        <Pagination className='mt-6'>
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
      </div>
    </div>
  );
};

export default ProjectsListPage;
