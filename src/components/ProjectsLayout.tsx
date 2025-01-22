import MemberCard from './MemberCard';
import Header from './Header';
import { Button } from './ui/button';
import { Input } from './ui/input';

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
    <div className='m-auto w-[50%]'>
      <header className='flex h-28 items-center justify-between px-20'>
        <Header children={'프로젝트 설정'} />
        <Button className='ml-auto' variant={'negative'} size={'sm'}>
          프로젝트 삭제
        </Button>
      </header>

      <div className='ml-3 flex items-center gap-5'>
        <p>프로젝트 이름</p>
        <div className='w-[84%]'>
          <Input placeholder="Enter Project's name" />
        </div>
      </div>

      <div className='mt-4 h-[315px] overflow-auto bg-gray p-3'>
        <div className='align-items-center m-5 mt-3 grid grid-cols-2 justify-items-center gap-y-4'>
          {data.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              email={member.email}
              position={member.position}
            />
          ))}
        </div>
      </div>

      <div className='mt-5 flex flex-col gap-4 pb-5'>
        <Button
          variant='secondary'
          children={'+ 인원 추가'}
          onClick={() => {
            console.log('인원 추가 버튼 클릭');
          }}
        />
        <Button
          children={'생성 완료'}
          onClick={() => {
            console.log('생성 완료 버튼 클릭');
          }}
        />
      </div>
    </div>
  );
};

export default ProjectsLayout;
