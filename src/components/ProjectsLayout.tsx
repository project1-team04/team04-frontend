import MemberCard from './MemberCard';
import Header from './Header';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useModalStore } from '@/stores/useModalStore';
import Modal from './Modal';
import { RiErrorWarningLine } from 'react-icons/ri';

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
  const { modalType, open, close } = useModalStore();

  return (
    <div className='mx-auto flex w-1/2 flex-col'>
      <header className='my-9 flex items-center justify-between gap-5'>
        <Header children={header} />
        {deleteButton && (
          <Button
            variant='negative'
            size='sm'
            onClick={() => open('deleteWarning')}
          >
            {deleteButton}
          </Button>
        )}
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
              onClick={() => open('invitePeople')}
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

      {modalType === 'deleteWarning' && (
        <Modal
          title={'정말 삭제하시겠습니까?'}
          content={'삭제 후에는 되돌리기가 불가능합니다.'}
          icon={<RiErrorWarningLine className='h-[60px] w-[60px]' />}
          css={'text-sm mt-[-18px]'}
          buttons={[
            { text: '아니오', variantStyle: 'outline', onClick: close },
            {
              text: '네',
              variantStyle: 'negative',
              onClick: () => console.log('삭제 진행'),
            },
          ]}
        />
      )}

      {modalType === 'invitePeople' && (
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
            { text: '취소', variantStyle: 'outline', onClick: close },
            { text: '추가', onClick: () => console.log('인원 초대 진행') },
          ]}
        />
      )}
    </div>
  );
};

export default ProjectsLayout;
