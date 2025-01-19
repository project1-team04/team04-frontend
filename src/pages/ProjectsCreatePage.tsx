import ButtonComponent from '@/components/Button';
import InputComponent from '@/components/Input';
import MemberCardComponent from '@/components/MemberCard';

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
  { id: '2', name: '권보령', email: 'hfgdf3@naver.com' },
  { id: '3', name: '양혜림', email: 'hfgdf3@naver.com' },
  { id: '4', name: '이태정', email: 'hfgdf3@naver.com' },
  // { id: '5', name: '명광호', email: 'hfgdf3@naver.com', position: 'Member' },
];

const ProjectsCreatePage = () => {
  return (
    <>
      <div className='ml-3 flex items-center gap-5'>
        <p>프로젝트 이름</p>
        <div className='w-[86%]'>
          <InputComponent placeholder="Enter Project's name" />
        </div>
      </div>

      <div className='mt-4 h-[315px] overflow-auto bg-gray p-3'>
        <div className='align-items-center m-5 mt-3 grid grid-cols-2 justify-items-center gap-y-4'>
          {data.map((member) => (
            <MemberCardComponent
              key={member.id}
              name={member.name}
              email={member.email}
              position={member.position}
            />
          ))}
        </div>
      </div>

      <div className='mt-5 flex flex-col gap-4'>
        <ButtonComponent
          variant='secondary'
          children={'+ 인원 추가'}
          onClick={() => {
            console.log('인원 추가 버튼 클릭');
          }}
        />
        <ButtonComponent
          children={'생성 완료'}
          onClick={() => {
            console.log('생성 완료 버튼 클릭');
          }}
        />
      </div>
    </>
  );
};

export default ProjectsCreatePage;
