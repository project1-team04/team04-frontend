import { createProject } from '@/apis/projectApi';
import ProjectsLayout from '@/components/ProjectsLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  // { id: '2', name: '권보령', email: 'hfgdf3@naver.com' },
];

const ProjectsCreatePage = () => {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
      const { id, name } = await createProject(projectName);
      console.log('프로젝트 생성 페이지:', { id, name });

      navigate(`/projects/details?projectId=${id}`, {
        state: {
          projectDetails: { id, name },
        },
      });
    } catch (error) {
      console.log('프로젝트 생성 페이지 에러', error);
    }
  };

  return (
    <ProjectsLayout
      header='프로젝트 생성'
      projectName={projectName}
      member={member}
      onInputChange={(e) => setProjectName(e.target.value)}
      onCreate={handleCreateProject}
    />
  );
};

export default ProjectsCreatePage;
