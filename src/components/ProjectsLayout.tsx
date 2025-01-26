import MemberCard from './MemberCard';
import Header from './Header';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useModalStore, ModalType } from '@/stores/useModalStore';
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
  projectName: string;
  member: Member[];
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate?: () => void;
  onDelete?: (projectId: number) => void;
  projectId?: number | undefined;
}

const ProjectsLayout = ({
  header,
  deleteButton,
  projectName,
  member,
  onInputChange,
  onCreate,
  onDelete,
  projectId,
}: ProjectLayoutProps) => {
  const { modalType, open, close } = useModalStore();

  return (
    <div className='flex flex-col w-1/2 mx-auto'>
      <header className='flex items-center justify-between gap-5 my-9'>
        <Header children={header} />
        {deleteButton && (
          <Button
            variant='negative'
            size='sm'
            onClick={() => open(ModalType.DELETE_WARNING)}
          >
            {deleteButton}
          </Button>
        )}
      </header>

      <div className='flex items-center gap-5 ml-3'>
        <p>프로젝트 이름</p>
        <div className='flex-1'>
          <Input placeholder="Enter Project's name" onChange={onInputChange} />
        </div>
      </div>

      <main className='overflow-hidden grow'>
        <div className='flex flex-col h-full'>
          <div className='grid w-full grid-cols-2 gap-5 p-4 my-4 overflow-y-auto bg-bg-deep'>
            {member.map((member) => (
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
              onClick={() => open(ModalType.INVITE_PEOPLE)}
            />
            <Button
              children={'생성 완료'}
              disabled={!projectName}
              onClick={() => {
                console.log('생성 완료 버튼 클릭');
                onCreate?.();
              }}
            />
          </div>
        </div>
      </main>

      {modalType === ModalType.DELETE_WARNING && (
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
              onClick: () => {
                if (projectId !== undefined) {
                  onDelete?.(projectId);
                } else {
                  console.error('projectId가 undefined 입니다.');
                }
              },
            },
          ]}
        />
      )}

      {modalType === ModalType.INVITE_PEOPLE && (
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
