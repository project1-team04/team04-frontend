import { IssueResponse } from '@/types/issueTypes';

interface IssueDetailsProps {
  issueData: IssueResponse | null | undefined;
  isLoading: boolean;
  isError: boolean;
}

const IssueDetails = ({ issueData, isLoading, isError }: IssueDetailsProps) => {
  if (isLoading) {
    return <p>이슈 정보를 불러오는 중...</p>;
  }

  if (isError || !issueData) {
    return <p>이슈 정보를 불러올 수 없습니다.</p>;
  }

  return (
    <>
      <p>
        {issueData.name} | ID: {issueData.id}
      </p>

      {/* 관련 정보 */}
      <div>
        <p>작성자: {issueData.reporterUserId}</p>
        <p>담당자: {issueData.assigneeUserId ?? ''}</p>
        <p>라벨 ID: {issueData.labelId}</p>
      </div>

      {/* 설명 */}
      <div>
        <p>Description title</p>
        <div>{issueData.description || '내용이 없습니다.'}</div>
      </div>

      {/* 트러블슈팅 */}
      <div>
        <p>Trouble shooting title</p>
        <div>{issueData.description || '내용이 없습니다.'}</div>
      </div>
    </>
  );
};

export default IssueDetails;
