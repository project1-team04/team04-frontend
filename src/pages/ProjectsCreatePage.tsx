import { createProject } from '@/apis/projectApi';
import MemberCard from '@/components/MemberCard';
import ProjectsLayout from '@/components/ProjectsLayout';
import { Button } from '@/components/ui/button';
import { useGetUser } from '@/hooks/useUser';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Member {
  id: string;
  name: string;
  email: string;
  role: 'MANAGER' | 'MEMBER';
}

const ProjectsCreatePage = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');

  const { data: user } = useGetUser();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    if (user) {
      const newMember: Member = {
        id: String(user.userId),
        name: user.username,
        email: user.email,
        role: 'MANAGER',
      };
      setMembers([newMember]);
    }
  }, [user]);

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
          {members.map((member) => (
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
