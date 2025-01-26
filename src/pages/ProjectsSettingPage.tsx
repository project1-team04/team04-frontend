import { deleteProject } from '@/apis/projectApi';
import ProjectsLayout from '@/components/ProjectsLayout';
import { useNavigate, useParams } from 'react-router-dom';

interface Member {
  id: string;
  name: string;
  email: string;
  position?: 'Project Manager' | 'Member';
}

const member: Member[] = [
  {
    id: '1',
    name: '정태승',
    email: 'hfgdf3@naver.com',
    position: 'Project Manager',
  },
  { id: '2', name: '권보령', email: 'hfgdf3@naver.com' },
  { id: '3', name: '양혜림', email: 'hfgdf3@naver.com' },
  { id: '4', name: '이태정', email: 'hfgdf3@naver.com' },
  { id: '5', name: '명광호', email: 'hfgdf3@naver.com', position: 'Member' },
];

const ProjectsSettingPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const handleDelete = async (projectId: number) => {
    try {
      await deleteProject(projectId);

      navigate('/projects');
    } catch (error) {
      console.log('프로젝트 삭제:', error);
    }
  };

  return (
    <ProjectsLayout
      header='프로젝트 설정'
      deleteButton='프로젝트 삭제'
      member={member}
      projectName={''}
      projectId={projectId ? Number(projectId) : undefined}
      onDelete={handleDelete}
    />
  );
};

export default ProjectsSettingPage;
