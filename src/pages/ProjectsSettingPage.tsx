import ProjectsLayout from '@/components/ProjectsLayout';

interface Member {
  id: string;
  name: string;
  email: string;
  position?: 'Project Manager' | 'Member';
}

// 목 데이터
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
  return (
    <ProjectsLayout
      header='프로젝트 설정'
      deleteButton='프로젝트 삭제'
      member={member}
      projectName={''}
      onCreate={function (): void {
        throw new Error('Function not implemented.');
      }}
      // projectName={projectName}
      // onInputChange={(e) => setProjectName(e.target.value)}
      // onCreate={handleCreateProject}
    />
  );
};

export default ProjectsSettingPage;
