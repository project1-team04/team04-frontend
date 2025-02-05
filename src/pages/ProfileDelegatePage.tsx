import { useNavigate } from 'react-router-dom';
import { paths } from '@/routers/paths';
import Button from '@/components/Button';
import Header from '@/components/Header';
import DelegateCard from '@/components/DelegateCard';
import { getProjectsWithMembersByManager } from '@/apis/projectApi';
import { useEffect, useState } from 'react';

interface Member {
  userId: number;
  userName: string;
  email: string;
  role: string;
}

interface ProjectData {
  project: {
    id: string;
    projectKey: string;
    name: string;
    issueCount: number;
  };
  members: Member[];
}

const ProfileDelegatePage = () => {
  const navigate = useNavigate();
  const [projectsData, setProjects] = useState<ProjectData[]>([]);

  const fetchUsersProjects = async () => {
    try {
      const res = await getProjectsWithMembersByManager();
      setProjects(res);
    } catch (error) {
      console.log('프로젝트 권한 위임 에러', error);
    }
  };

  const handleDelegateComplete = async () => {
    try {
      // TODO: 위임 API 호출!!!!!!!!!!!

      navigate(paths.profile.root);
    } catch (error) {
      console.error('권한 위임 완료 에러', error);
    }
  };

  useEffect(() => {
    fetchUsersProjects();
  }, []);

  return (
    <div className='flex flex-col w-1/2 mx-auto'>
      <header className='flex items-center gap-5 my-9'>
        <Header children={'프로젝트 권한 위임'} />
      </header>

      <main className='overflow-hidden mb-9 grow'>
        <div className='flex flex-col items-center h-full p-4 rounded-2xl bg-bg-deep'>
          <div className='flex flex-col flex-1 w-full gap-4 overflow-y-auto'>
            {projectsData.map((projectData) => (
              <DelegateCard
                key={projectData.project.id}
                project={projectData.project}
                members={projectData.members}
              />
            ))}
          </div>

          <div className='flex w-2/3 gap-4 mt-4'>
            <Button
              children={'취소'}
              variant='outline'
              className='flex-1 border border-default bg-bg'
              onClick={() => navigate(paths.profile.root)}
            />
            {/* TODO) onClick 이벤트 핸들러에서 api 호출 후 paths.profile.root로 navigate */}
            <Button
              children={'위임 완료'}
              className='flex-1'
              onClick={handleDelegateComplete}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDelegatePage;
