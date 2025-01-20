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
    <>
      <div className='flex items-center gap-5 ml-3'>
        <p>프로젝트 이름</p>
        <div className='w-[86%]'>
          <InputComponent placeholder="Enter Project's name" />
        </div>
      </div>

      <div className='mt-4 h-[315px] overflow-auto bg-gray p-3'>
        <div className='grid grid-cols-2 m-5 mt-3 align-items-center justify-items-center gap-y-4'>
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

      <div className='flex flex-col gap-4 mt-5'>
        <ButtonComponent
          variant='secondary'
          children={'+ 인원 추가'}
          onClick={() => open('addPeople')}
        />
        <ButtonComponent
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
