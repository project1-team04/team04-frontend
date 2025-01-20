interface IssueCardProps {
  title: string;
  issueId: string;
  manager: string;
}

const IssueCard = ({ title, issueId, manager }: IssueCardProps) => {
  return (
    <>
      <div className='h-[125px] w-full rounded-lg bg-bg p-7 pt-6'>
        <span className='text-lg font-semibold'>{title}</span>
        <div className='mt-7 flex justify-between text-sm'>
          <div className='flex items-center gap-2'>
            <div className='h-3 w-3 rounded-full bg-red' />
            {/* button? */}
            <span>{issueId}</span>
          </div>
          <span>{manager}</span>
        </div>
      </div>
    </>
  );
};

export default IssueCard;
