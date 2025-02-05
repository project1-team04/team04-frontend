import { IssueCardProps } from '@/types/issueTypes';
import IssueCard from './IssueCard';

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

const KanbanCard = ({ status, issueCount, issues = [] }: KanbanCardProps) => {
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

      <section className='grid grow gap-4 overflow-y-auto'>
        {issues.map((issue) => (
          <IssueCard key={issue.id} {...issue} />
        ))}
      </section>
    </div>
  );
};

export default KanbanCard;
