import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteIssue, useGetIssue } from '@/hooks/useIssue';
import Button from '@/components/Button';
import Chat from '@/components/chat/Chat';
import { IoChevronBack } from 'react-icons/io5';

const ProjectsIssueDetailPage = () => {
  const navigate = useNavigate();
  const { projectId, issueId } = useParams();
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
            onClick={handleDeleteIssue}
            disabled={isDeleting}
          />
        </div>
        {isLoading ? (
          <p>이슈 정보를 불러오는 중...</p>
        ) : isError || !issueData ? (
          <p>이슈 정보를 불러올 수 없습니다.</p>
        ) : (
          <>
            <p>
              {issueData.name} | ID: {issueData.id}
            </p>
            <div>
              <p>작성자: {issueData.reporterUserId}</p>
              <p>담당자: {issueData.assigneeUserId}</p>
              <p>라벨 ID: {issueData.labelId}</p>
            </div>
            <div>
              <p>Description title</p>
              <div>{issueData.description || '내용이 없습니다.'}</div>
            </div>
          </>
        )}
      </div>

      <div className='w-1/3 min-w-[400px] border-l border-divider-default'>
        <Chat />
      </div>
    </div>
  );
};

export default ProjectsIssueDetailPage;
