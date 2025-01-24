import instance from '@/apis/instance';
import ProjectsLayout from '@/components/ProjectsLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Member {
  id: string;
  name: string;
  email: string;
  position?: 'Project Manager' | 'Member';
}

// 목 데이터
const data: Member[] = [
  {
    id: '1',
    name: '정태승',
    email: 'hfgdf3@naver.com',
    position: 'Project Manager',
  },
  // { id: '2', name: '권보령', email: 'hfgdf3@naver.com' },
  // { id: '3', name: '양혜림', email: 'hfgdf3@naver.com' },
  // { id: '4', name: '이태정', email: 'hfgdf3@naver.com' },
  // { id: '5', name: '명광호', email: 'hfgdf3@naver.com', position: 'Member' },
];

const ProjectsCreatePage = () => {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const createProject = async () => {
    try {
      const res = await instance.post('/projects', {
        name: projectName,
      });
      const { id, name } = res.data;
      console.log('프로젝트 생성:', res.data);
      navigate(`/projects/details?projectId=${id}`, {
        state: {
          projectDetails: { id, name },
        },
      });
    } catch (error) {
      console.log('프로젝트 생성 에러: ', error);
    }
  };

  return (
    <ProjectsLayout
      data={data}
      header='프로젝트 생성'
      onInputChange={(e) => setProjectName(e.target.value)}
      onCreate={createProject}
    />
  );
};

export default ProjectsCreatePage;
