import ButtonComponent from './Button';
import MemberCardComponent from './MemberCard';
import InputComponent from './Input';
import { useModalStore } from '@/stores/useModalStore';
import Modal from './Modal';
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
  const { modalType, open } = useModalStore();

  return (
    <div className='m-auto w-[50%]'>
      <header className='flex items-center justify-between px-20 h-28'>
        <Header children={'프로젝트 설정'} />
        <Button className='ml-auto' variant={'negative'} size={'sm'}>
          프로젝트 삭제
        </Button>
      </header>

      <div className='flex items-center gap-5 ml-3'>
        <p>프로젝트 이름</p>
        <div className='w-[84%]'>
          <Input placeholder="Enter Project's name" />
        </div>
      </div>

      <div className='mt-4 h-[315px] overflow-auto bg-gray p-3'>
        <div className='grid grid-cols-2 m-5 mt-3 align-items-center justify-items-center gap-y-4'>
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

      <div className='mt-5 flex flex-col gap-4'>
        <ButtonComponent
          variant='secondary'
          children={'+ 인원 추가'}
          onClick={() => open('addPeople')}
        />
        <Button
          children={'생성 완료'}
          onClick={() => {
            console.log('생성 완료 버튼 클릭');
          }}
        />
      </div>

      {modalType === 'addPeople' && (
        <Modal
          title={'인원 초대'}
          content={
            <div className='w-64'>
              <span className='text-sm'>
                이메일 <span className='text-red'>*</span>
              </span>
              <Input className='bg-white' />
            </div>
          }
          buttons={[
            { text: '취소', variantStyle: 'outline' },
            { text: '추가' },
          ]}
        />
      )}
    </>
  );
};

export default ProjectsLayout;
