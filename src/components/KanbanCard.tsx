import IssueCard from './IssueCard';

interface KanbanCardProps {
  status: 'To Do' | 'On Progress' | 'Done';
  issueCount: string;
}

// props: status, issueCount, data
const KanbanCard = ({ status, issueCount }: KanbanCardProps) => {
  const variantStyles = {
    'To Do': {
      divideColor: 'divide-purple',
      roundColor: 'bg-purple',
    },
    'On Progress': {
      divideColor: 'divide-orange',
      roundColor: 'bg-orange',
    },
    Done: {
      divideColor: 'divide-green',
      roundColor: 'bg-green',
    },
  };

  const { divideColor, roundColor } = variantStyles[status];

  return (
    <>
      <div
        className={`h-full w-[21rem] divide-y-2 ${divideColor} rounded-t-2xl bg-bg-deep p-5`}
      >
        <div className='flex items-center gap-4 mb-3 h-9'>
          <div className={`h-3 w-3 rounded-full ${roundColor}`} />
          <span className='font-semibold'>{status}</span>
          <span className='w-5 h-5 text-sm text-center rounded-lg bg-border-default'>
            {issueCount}
          </span>
        </div>

        <section className='flex flex-col gap-5 pt-4'>
          {/* data */}
          <IssueCard
            title={'Merge 이슈'}
            issueId={'12345'}
            manager={'권보령'}
          />
        </section>
      </div>
    </>
  );
};

export default KanbanCard;
