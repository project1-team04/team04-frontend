import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface MemberCardProps {
  position?: 'Project Manager' | 'Member';
  name: string;
  email: string;
}

// 직책이 PM과 Member로 나뉨 -> CardTitle의 스타일 달라짐
const MemberCardComponent = ({
  position = 'Member',
  name,
  email,
}: MemberCardProps) => {
  return (
    <>
      <Card className='h-[125px] w-[300px] border-border-default'>
        <CardHeader className='m-4 mb-2 inline-flex h-7 justify-center rounded-lg bg-green p-3'>
          <CardTitle className='text-center text-sm font-medium text-white'>
            {position}
          </CardTitle>
        </CardHeader>

        <CardContent className='h-8 text-xl font-bold text-text'>
          <p>{name}</p>
        </CardContent>

        <CardFooter className='text-sm text-text-disabled'>
          <p>{email}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default MemberCardComponent;
