import { IssueCardProps } from '@/types/issueTypes';
import DropDown from './DropDown';

const IssueCard = ({ id, name, assigneeUserId }: IssueCardProps) => {
  // TODO) 라벨 목록 API에서 불러오기
  const dropdownLabels = [
    {
      label: 'None',
      onClick: () => console.log('None'),
    },
    {
      label: 'Enhancement',
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
      <span className='m-1 text-lg font-semibold'>{name}</span>
      <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center gap-2'>
          <DropDown
            items={dropdownLabels}
            className='h-2 rounded-full bg-red p-2'
          />

          <span>{id}</span>
        </div>
        {assigneeUserId && <span>{assigneeUserId}</span>}
      </div>
    </div>
  );
};

export default IssueCard;
