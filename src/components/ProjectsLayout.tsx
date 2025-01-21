import ButtonComponent from './Button';
import MemberCardComponent from './MemberCard';
import InputComponent from './Input';

interface Member {
  id: string;
  name: string;
  email: string;
  position?: 'Project Manager' | 'Member';
}

interface ProjectLayoutProps {
  data: Member[];
}

const ProjectsLayout = ({ data }: ProjectLayoutProps) => {
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

      <div className='mt-5 flex flex-col gap-4 pb-5'>
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

export default ProjectsLayout;
