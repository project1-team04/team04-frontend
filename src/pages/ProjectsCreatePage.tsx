import MemberCardComponent from '@/components/MemberCard';

const ProjectsCreatePage = () => {
  // 목 데이터
  const data = [
    {
      id: '1',
      name: '정태승',
      email: 'hfgdf3@naver.com',
      position: 'Project Manager',
    },
    { id: '2', name: '권보령', email: 'hfgdf3@naver.com' },
    { id: '3', name: '양혜림', email: 'hfgdf3@naver.com' },
    { id: '4', name: '이태정', email: 'hfgdf3@naver.com' },
    // { id: '5', name: '명광호', email: 'hfgdf3@naver.com', position: 'Member' },
  ];

  return (
    <>
      <MemberCardComponent name={''} email={''} />
    </>
  );
};

export default ProjectsCreatePage;
