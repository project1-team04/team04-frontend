import ProjectCardComponent from '@/components/ProjectCard';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

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
    // { id: '10', title: 'Beta', issue: 6 },
    // { id: '11', title: 'Gamma', issue: 7 },
    // { id: '12', title: 'Delta', issue: 8 },
    // { id: '14', title: 'Epsilon', issue: 9 },
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

      <Pagination>
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
    </>
  );
};

export default ProjectsListPage;
