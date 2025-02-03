import Header from './Header';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCustomModalStore } from '@/stores/useCustomModalStore';
import { IoWarning } from 'react-icons/io5';

interface ProjectLayoutProps {
  header: string;
  deleteButton?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: (projectId: number) => void;
  projectId?: number | undefined;
  children?: React.ReactNode;
}

const ProjectsLayout = ({
  header,
  deleteButton,
  onInputChange,
  onDelete,
  projectId,
  children,
}: ProjectLayoutProps) => {
  const showModal = useCustomModalStore((state) => state.showModal);

  return (
    <div className='mx-auto flex w-1/2 flex-col'>
      <header className='my-9 flex items-center justify-between gap-5'>
        <Header children={header} />

        {deleteButton && (
          <Button
            variant='negative'
            size='sm'
            children={deleteButton}
            onClick={() =>
              showModal({
                icon: <IoWarning size={40} className='text-red' />,
                title: '정말 삭제하시겠습니까?',
                content: '프로젝트 삭제 후에는 되돌리기가 불가능합니다.',
                buttons: [
                  {
                    text: '취소',
                    variant: 'outline',
                  },
                  {
                    text: '삭제',
                    variant: 'negative',
                    onClick: () => {
                      console.error(projectId);
                      if (projectId !== undefined) {
                        onDelete?.(projectId);
                      } else {
                        console.error('projectId가 undefined 입니다.');
                      }
                    },
                  },
                ],
              })
            }
          />
        )}
      </header>

      <div className='ml-3 flex items-center gap-5'>
        <p>프로젝트 이름</p>
        <div className='flex-1'>
          <Input placeholder="Enter Project's name" onChange={onInputChange} />
        </div>
      </div>

      <main className='grow overflow-hidden'>{children}</main>
    </div>
  );
};

export default ProjectsLayout;
