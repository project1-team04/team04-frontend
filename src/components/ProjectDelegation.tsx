import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProjectDelegationProps {
  title: string;
  member: string[];
}

const ProjectDelegation = ({ title, member }: ProjectDelegationProps) => {
  return (
    <>
      <div className='my-2 flex h-[60px] w-full items-center justify-between gap-10 rounded-xl bg-white p-8 pl-10'>
        <span className='text-lg font-semibold text-text'>{title}</span>

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
    </>
  );
};

export default ProjectDelegation;
