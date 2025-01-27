import DropDown from './DropDown';

export interface IssueCardProps {
  id: string;
  title: string;
  assignee: string;
}

const IssueCard = ({ title, id, assignee }: IssueCardProps) => {
  const dropdownItems = [
    {
      label: 'None',
      onClick: () => console.log('None'),
    },
    {
      label: 'Feature',
      onClick: () => console.log('Feature'),
    },
    {
      label: 'Bug',
      onClick: () => console.log('Bug'),
    },
    {
      label: 'Edit labels',
      onClick: () => console.log('Edit labels'),
    },
  ];

  return (
    // FIX) title, id, assignee 길어지는 경우 대응
    <div className='grid h-32 w-full gap-6 rounded-lg bg-bg p-5'>
      <span className='m-1 text-lg font-semibold'>{title}</span>
      <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center gap-2'>
          <DropDown
            items={dropdownItems}
            className='h-2 rounded-full bg-red p-2'
          />

          <span>{id}</span>
        </div>
        <span>{assignee}</span>
      </div>
    </div>
  );
};

export default IssueCard;
