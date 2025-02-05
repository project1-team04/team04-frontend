import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface MemberCardProps {
  role?: 'MANAGER' | 'MEMBER';
  name: string;
  email: string;
}

const MemberCard = ({ role = 'MEMBER', name, email }: MemberCardProps) => {
  const variantStyles = role === 'MANAGER' ? 'bg-green' : 'bg-orange';

  return (
    <Card>
      <CardHeader
        className={`m-4 flex w-fit justify-center rounded-lg ${variantStyles} px-3 py-1`}
      >
        <CardTitle className='text-xs font-medium text-center text-white'>
          {role}
        </CardTitle>
      </CardHeader>

      <CardContent className='pb-1 text-lg font-bold'>
        <p>{name}</p>
      </CardContent>

      <CardFooter className='text-sm'>
        <p className='text-text-disabled'>{email}</p>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
