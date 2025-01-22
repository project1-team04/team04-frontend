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
    <Card className='h-[120px] w-[270px]'>
      <CardHeader
        className={`m-4 mb-2 inline-flex h-3 justify-center rounded-lg ${variantStyles} p-3`}
      >
        <CardTitle className='text-center text-xs font-medium text-white'>
          {position}
        </CardTitle>
      </CardHeader>

      <CardContent className='h-8 text-lg font-bold'>
        <p>{name}</p>
      </CardContent>

      <CardFooter className='text-sm'>
        <p className='text-text-disabled'>{email}</p>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
