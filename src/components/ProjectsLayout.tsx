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
    <div className='mx-auto flex w-1/2 flex-col'>
      <header className='my-9 flex items-center justify-between gap-5'>
        <Header children={'프로젝트 설정'} />
        <Button variant={'negative'} size={'sm'}>
          프로젝트 삭제
        </Button>
      </header>

      <div className='ml-3 flex items-center gap-5'>
        <p>프로젝트 이름</p>
        <div className='flex-1'>
          <Input placeholder="Enter Project's name" />
        </div>
      </div>

      <main className='grow overflow-hidden'>
        <div className='flex h-full flex-col'>
          <div className='my-4 grid w-full grid-cols-2 gap-5 overflow-y-auto bg-bg-deep p-4'>
            {data.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                email={member.email}
                position={member.position}
              />
            ))}
          </div>

          <div className='mb-9 flex w-full flex-col gap-y-4'>
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
      </main>
    </div>
  );
};

export default ProjectsLayout;
