import { useParams } from 'react-router-dom';
import { useGetIssue } from '@/hooks/useIssue';
import Chat from '../components/chat/Chat';

const ProjectsIssueDetailPage = () => {
  const { projectId, issueId } = useParams();

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

  return (
    <div className='flex w-full'>
      <div className='flex-1'>
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

      <div className='w-1/3 min-w-[400px]'>
        <Chat />
      </div>
    </div>
  );
};

export default ProjectsIssueDetailPage;
