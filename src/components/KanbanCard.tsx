import IssueCard, { IssueCardProps } from './IssueCard';

interface KanbanCardProps {
  status: 'To Do' | 'On Progress' | 'Done';
  issueCount: string;
  issues?: IssueCardProps[];
}

const variantStyles = {
  'To Do': 'bg-purple',
  'On Progress': 'bg-orange',
  Done: 'bg-green',
};

// 스크롤 작동 확인하기 위해 추가
const mockIssues: IssueCardProps[] = [
  { id: 'a1b2c3d4', title: '로그인 오류 발생', assignee: '양혜림' },
  { id: 'e5f6g7h8', title: '대시보드 UI 버그', assignee: '권보령' },
  { id: 'i9j0k1l2', title: 'API 응답 속도 저하', assignee: '정태승' },
  { id: 'm3n4o5p6', title: '파일 업로드 실패', assignee: '이태정' },
  { id: 'q7r8s9t0', title: '알림 기능 미작동', assignee: '명광호' },
];

// props: status, issueCount, data
const KanbanCard = ({
  status,
  issueCount,
  issues = mockIssues,
}: KanbanCardProps) => {
  const color = variantStyles[status];

  return (
    <div
      className={`flex h-full w-full flex-col gap-y-4 rounded-t-2xl bg-bg-deep p-4`}
    >
      <div className='flex items-center gap-3'>
        <div className={`h-3 w-3 rounded-full ${color}`} />
        <p className='font-semibold'>{status}</p>
        <p className='min-h-3 min-w-3 rounded-lg bg-border-default px-1.5 text-center text-sm'>
          {issueCount}
        </p>
      </div>

      <div className={`h-0.5 w-full ${color}`}></div>

      {/* 이슈 목록 - 스크롤 적용 */}
      <section className='grid grow gap-4 overflow-y-auto'>
        {issues.map((issue) => (
          <IssueCard key={issue.id} {...issue} />
        ))}
      </section>
    </div>
  );
};

export default KanbanCard;
