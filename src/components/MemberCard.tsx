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

const MemberCardComponent = ({
  position = 'Member',
  name,
  email,
}: MemberCardProps) => {
  const variantStyles =
    position === 'Project Manager' ? 'bg-green' : 'bg-orange';

  return (
    <>
      <Card className='h-[125px] w-[300px] border-border-default'>
        <CardHeader
          className={`m-4 mb-2 inline-flex h-7 justify-center rounded-lg ${variantStyles} p-3`}
        >
          <CardTitle className='text-center text-sm font-medium text-white'>
            {position}
          </CardTitle>
        </CardHeader>

        <CardContent className='h-8 text-xl font-bold'>
          <p>{name}</p>
        </CardContent>

        <CardFooter className='text-sm'>
          <p className='text-text-disabled'>{email}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default MemberCardComponent;
