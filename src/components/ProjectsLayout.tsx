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
  isCreatePage?: boolean;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate?: () => void;
  onUpdate?: (projectId: number) => void;
  onDelete?: (projectId: number) => void;
  projectId?: number | undefined;
  onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInvite?: (projectId: number, email: string) => void;
  email?: string;
  inviteMessage?: string;
}

const ProjectsLayout = ({
  header,
  deleteButton,
  projectName,
  member,
  isCreatePage,
  onInputChange,
  onCreate,
  onUpdate,
  onDelete,
  projectId,
  onEmailChange,
  onInvite,
  email,
  inviteMessage,
}: ProjectLayoutProps) => {
  const { modalType, open, close } = useModalStore();

  const buttonText = isCreatePage ? '생성 완료' : '설정 완료';

  const handleButton = () => {
    if (isCreatePage) {
      console.log('프로젝트 생성 진행');
      onCreate?.();
    } else {
      if (projectId !== undefined) {
        console.log('프로젝트 설정 수정 진행');
        onUpdate?.(projectId);
      } else {
        console.error('프로젝트 ID가 undefined 입니다.');
      }
    }
  };

  return (
    <div className='mx-auto flex w-1/2 flex-col'>
      <header className='my-9 flex items-center justify-between gap-5'>
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

      <div className='ml-3 flex items-center gap-5'>
        <p>프로젝트 이름</p>
        <div className='flex-1'>
          <Input placeholder="Enter Project's name" onChange={onInputChange} />
        </div>
      </div>

      <main className='grow overflow-hidden'>
        <div className='flex h-full flex-col'>
          <div className='mb-4 mt-4 grid w-full grid-cols-2 gap-5 overflow-y-auto bg-bg-deep p-4'>
            {member.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                email={member.email}
                position={member.position}
              />
            ))}
          </div>
          {inviteMessage && (
            <p className='mb-4 mt-[-10px] text-sm text-text-error'>
              {inviteMessage}
            </p>
          )}

          <div className='mb-9 flex w-full flex-col gap-y-4'>
            {!isCreatePage && (
              <Button
                variant='secondary'
                children={'+ 인원 추가'}
                onClick={() => open(ModalType.INVITE_PEOPLE)}
              />
            )}

            <Button
              children={buttonText}
              disabled={!projectName}
              onClick={handleButton}
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
            { text: '아니오', variantStyle: 'outline' },
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
              <Input onChange={onEmailChange} />
            </div>
          }
          buttons={[
            { text: '취소', variantStyle: 'outline' },
            {
              text: '추가',
              onClick: () => {
                if (projectId) {
                  console.log('인원 추가 전송:', projectId, email);

                  if (email) {
                    onInvite?.(projectId, email);
                  } else {
                    console.error('이메일이 비어 있습니다.');
                  }
                } else {
                  console.error('projectId가 undefined입니다.');
                }
              },
            },
          ]}
        />
      )}
    </div>
  );
};

export default ProjectsLayout;
