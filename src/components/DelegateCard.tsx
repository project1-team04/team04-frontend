import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DelegateCardProps {
  title: string;
  member: string[];
}

const DelegateCard = ({ title, member }: DelegateCardProps) => {
  return (
    <div className='flex w-full items-center justify-between rounded-2xl bg-white px-8 py-4'>
      <span className='text-lg font-semibold'>{title}</span>

      <Select>
        <SelectTrigger className='w-fit'>
          <SelectValue placeholder='위임' />
        </SelectTrigger>
        <SelectContent className='min-w-fit'>
          {member.map((memberName) => (
            // FIX) 멤버 고유 id로 key 변경
            // 동명이인이 있을 수 있으므로 memberName은 key로 부적합
            <SelectItem key={memberName} value={memberName}>
              {memberName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DelegateCard;
