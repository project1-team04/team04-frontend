import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DelegateCardProps {
  project: {
    id: string;
    projectKey: string;
    name: string;
    issueCount: number;
  };
  members: Member[];
}

interface Member {
  userId: number;
  userName: string;
  email: string;
  role: string;
}

const DelegateCard = ({ project, members }: DelegateCardProps) => {
  console.log(project, members);

  return (
    <div className='flex items-center justify-between w-full px-8 py-4 bg-white rounded-2xl'>
      <span className='text-lg font-semibold'>{project.name}</span>

      <Select>
        <SelectTrigger className='w-fit'>
          <SelectValue placeholder='위임' />
        </SelectTrigger>
        <SelectContent className='min-w-fit'>
          {members.map((member) => (
            <SelectItem key={member.userId} value={member.userName}>
              {member.userName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DelegateCard;
