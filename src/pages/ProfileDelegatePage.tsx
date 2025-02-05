import { useNavigate } from 'react-router-dom';
import { paths } from '@/routers/paths';
import Button from '@/components/Button';
import Header from '@/components/Header';
import DelegateCard from '@/components/DelegateCard';
import {
  assignManager,
  getProjectsWithMembersByManager,
} from '@/apis/projectApi';
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

interface DelegateSelection {
  projectId: string;
  userId: number;
}

const ProfileDelegatePage = () => {
  const navigate = useNavigate();
  const [projectsData, setProjects] = useState<ProjectData[]>([]);
  const [selectedDelegates, setSelectedDelegates] = useState<
    DelegateSelection[]
  >([]);

  const fetchUsersProjects = async () => {
    try {
      const res = await getProjectsWithMembersByManager();
      setProjects(res);
    } catch (error) {
      console.log('프로젝트 권한 위임 에러', error);
    }
  };

  const handleSelectDelegate = (projectId: string, userId: number) => {
    setSelectedDelegates((prev) => {
      // 기존 배열에서 같은 projectId가 있으면 덮어씀(없으면 추가)
      const updated = prev.filter((item) => item.projectId !== projectId);
      return [...updated, { projectId, userId }];
    });

    console.log(`저장된 위임 정보:`, [
      ...selectedDelegates,
      { projectId, userId },
    ]);
  };

  const handleDelegateComplete = async () => {
    try {
      if (selectedDelegates.length === 0) {
        console.warn('선택된 위임 정보가 없습니다.');
        return;
      }

      const formattedDelegates = selectedDelegates.map(
        ({ projectId, userId }) => ({
          projectId: Number(projectId),
          userId,
        })
      );
      console.log('최종 위임 정보:', formattedDelegates);

      await assignManager(formattedDelegates);

      navigate(paths.profile.root);
    } catch (error) {
      console.error('권한 위임 완료 에러', error);
    }
  };

  useEffect(() => {
    fetchUsersProjects();
  }, []);

  return (
    <div className='mx-auto flex w-1/2 flex-col'>
      <header className='my-9 flex items-center gap-5'>
        <Header children={'프로젝트 권한 위임'} />
      </header>

      <main className='mb-9 grow overflow-hidden'>
        <div className='flex h-full flex-col items-center rounded-2xl bg-bg-deep p-4'>
          <div className='flex w-full flex-1 flex-col gap-4 overflow-y-auto'>
            {projectsData.map((projectData) => (
              <DelegateCard
                key={projectData.project.id}
                project={projectData.project}
                members={projectData.members}
                onSelectDelegate={handleSelectDelegate}
              />
            ))}
          </div>

          <div className='mt-4 flex w-2/3 gap-4'>
            <Button
              children={'취소'}
              variant='outline'
              className='border-default flex-1 border bg-bg'
              onClick={() => navigate(paths.profile.root)}
            />
            <Button
              children={'위임 완료'}
              className='flex-1'
              onClick={handleDelegateComplete}
              disabled={Object.keys(selectedDelegates).length === 0}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDelegatePage;
