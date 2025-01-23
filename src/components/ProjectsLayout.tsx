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
  header: string;
  deleteButton?: string;
  data: Member[];
}

const ProjectsLayout = ({ header, deleteButton, data }: ProjectLayoutProps) => {
  return (
    <div className='flex flex-col w-1/2 mx-auto'>
      <header className='flex items-center justify-between gap-5 my-9'>
        <Header children={header} />
        {deleteButton && (
          <Button variant='negative' size='sm' children={deleteButton}></Button>
        )}
      </header>

      <div className='flex items-center gap-5 ml-3'>
        <p>프로젝트 이름</p>
        <div className='flex-1'>
          <Input placeholder="Enter Project's name" />
        </div>
      </div>

      <main className='overflow-hidden grow'>
        <div className='flex flex-col h-full'>
          <div className='grid w-full grid-cols-2 gap-5 p-4 my-4 overflow-y-auto bg-bg-deep'>
            {data.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                email={member.email}
                position={member.position}
              />
            ))}
          </div>

          <div className='flex flex-col w-full mb-9 gap-y-4'>
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
