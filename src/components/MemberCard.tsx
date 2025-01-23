import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface MemberCardProps {
  position?: 'Project Manager' | 'Member';
  name: string;
  email: string;
}

const MemberCard = ({ position = 'Member', name, email }: MemberCardProps) => {
  const variantStyles =
    position === 'Project Manager' ? 'bg-green' : 'bg-orange';

  return (
    <Card>
      <CardHeader
        className={`m-4 flex w-fit justify-center rounded-lg ${variantStyles} px-3 py-1`}
      >
        <CardTitle className='text-center text-xs font-medium text-white'>
          {position}
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
