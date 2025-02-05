import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteIssue, useGetIssue } from '@/hooks/useIssue';
import Button from '@/components/Button';
import IssueDetails from '@/components/IssueDetails';
import Chat from '@/components/chat/Chat';
import { IoChevronBack, IoWarning } from 'react-icons/io5';
import { useCustomModalStore } from '@/stores/useCustomModalStore';

const ProjectsIssueDetailPage = () => {
  const navigate = useNavigate();
  const { projectId, issueId } = useParams();
  const showModal = useCustomModalStore((state) => state.showModal);
  const { mutate: deleteIssueMutate, isPending: isDeleting } = useDeleteIssue();

  // 이슈 조회 API 호출
  const {
    data: issueData,
    isLoading,
    isError,
  } = useGetIssue(
    Number(projectId),
    Number(issueId),
    !!issueId // issueId가 있을 때만 실행
  );

  const handleDeleteIssue = () => {
    if (!projectId || !issueId) return;

    deleteIssueMutate(
      { projectId: Number(projectId), issueId: Number(issueId) },
      {
        onSuccess: () => {
          navigate(-1);
        },
      }
    );
  };

  return (
    <div className='flex w-full'>
      <div className='flex-1'>
        <div className='flex items-center justify-between border-b border-divider-default p-2'>
          <IoChevronBack onClick={() => navigate(-1)} className='text-3xl' />
          <Button
            children={'이슈 삭제'}
            variant='negative'
            size='sm'
            className='w-fit'
            onClick={() =>
              showModal({
                icon: <IoWarning size={40} className='text-red' />,
                title: '이슈를 삭제하시겠습니까?',
                content: '삭제한 이슈는 복구되지 않습니다.',
                buttons: [
                  {
                    text: '취소',
                    variant: 'outline',
                    disabled: isDeleting,
                  },
                  {
                    text: '삭제',
                    variant: 'negative',
                    onClick: handleDeleteIssue,
                    disabled: isDeleting,
                  },
                ],
              })
            }
            disabled={isDeleting}
          />
        </div>

        <div>
          <IssueDetails
            issueData={issueData}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>

      <div className='w-1/3 min-w-[400px] border-l border-divider-default'>
        <Chat />
      </div>
    </div>
  );
};

export default ProjectsIssueDetailPage;
