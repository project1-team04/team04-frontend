import { createProject } from '@/apis/projectApi';
import MemberCard from '@/components/MemberCard';
import ProjectsLayout from '@/components/ProjectsLayout';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Member {
  id: string;
  name: string;
  email: string;
  role: 'MANAGER' | 'MEMBER';
}

// 목 데이터: 프로필에서 받아온 본인 정보를 Member에 넣어야 함
const member: Member[] = [
  {
    id: '1',
    name: '정태승',
    email: 'hfgdf3@naver.com',
    role: 'MANAGER',
  },
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
      onInputChange={(e) => setProjectName(e.target.value)}
    >
      <div className='flex h-full flex-col'>
        <div className='mb-4 mt-4 grid w-full grid-cols-2 gap-5 overflow-y-auto bg-bg-deep p-4'>
          {member.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              email={member.email}
              role={member.role}
            />
          ))}
        </div>

        <div className='mb-9 flex w-full flex-col gap-y-4'>
          <Button
            children='생성 완료'
            disabled={!projectName}
            onClick={handleCreateProject}
          />
        </div>
      </div>
    </ProjectsLayout>
  );
};

export default ProjectsCreatePage;
