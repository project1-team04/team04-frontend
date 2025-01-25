export interface IssueCardProps {
  id: string;
  title: string;
  assignee: string;
}

const IssueCard = ({ title, id, assignee }: IssueCardProps) => {
  return (
    // FIX) title, id, assignee 길어지는 경우 대응
    <div className='grid h-32 w-full gap-6 rounded-lg bg-bg p-4'>
      <span className='text-lg font-semibold'>{title}</span>
      <div className='flex justify-between text-sm'>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 rounded-full bg-red' />
          {/* button? */}
          <span>{id}</span>
        </div>
        <span>{assignee}</span>
      </div>
    </div>
  );
};

export default IssueCard;
