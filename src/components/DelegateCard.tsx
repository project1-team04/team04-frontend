import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

interface DelegateCardProps {
  project: {
    id: string;
    projectKey: string;
    name: string;
    issueCount: number;
  };
  members?: Member[];
  onSelectDelegate: (projectId: string, userId: number) => void;
}

interface Member {
  userId: number;
  userName: string;
  email: string;
  role: string;
}

const DelegateCard = ({
  project,
  members,
  onSelectDelegate,
}: DelegateCardProps) => {
  const [, setSelectedUserId] = useState<number | null>(null);

  const handleSelectChange = (userId: string) => {
    const selectedId = Number(userId);
    setSelectedUserId(selectedId);
    onSelectDelegate(project.id, selectedId);

    console.log(`프로젝트 id: ${project.id}, 위임할 유저 id: ${selectedId}`);
  };

  return (
    <div className='flex w-full items-center justify-between rounded-2xl bg-white px-8 py-4'>
      <span className='text-lg font-semibold'>{project.name}</span>

      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className='w-fit'>
          <SelectValue placeholder='위임' />
        </SelectTrigger>
        <SelectContent className='min-w-fit'>
          {members?.map((member) => (
            <SelectItem key={member.userId} value={member.userId.toString()}>
              {member.userName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DelegateCard;
