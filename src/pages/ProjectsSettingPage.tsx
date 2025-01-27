import { deleteProject, modifyProject } from '@/apis/projectApi';
import ProjectsLayout from '@/components/ProjectsLayout';
import { useState } from 'react';
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
  // { id: '2', name: '권보령', email: 'hfgdf3@naver.com' },
];

const ProjectsSettingPage = () => {
  const [projectName, setProjectName] = useState('');
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

  const handleUpdate = async (projectId: number) => {
    try {
      await modifyProject(projectId, projectName);

      navigate('/projects');
    } catch (error) {
      console.log('프로젝트명 수정:', error);
    }
  };

  return (
    <ProjectsLayout
      header='프로젝트 설정'
      deleteButton='프로젝트 삭제'
      member={member}
      projectName={projectName}
      projectId={projectId ? Number(projectId) : undefined}
      onUpdate={handleUpdate}
      onInputChange={(e) => setProjectName(e.target.value)}
      onDelete={handleDelete}
    />
  );
};

export default ProjectsSettingPage;
