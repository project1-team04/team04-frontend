import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// interface MemberCardProps {
//   position: string,
//   name: string,
//   email: string,
// }

// props: 직책, 이름, 이메일
const MemberCardComponent = () => {
  return (
    <>
      <Card className='h-[130px] w-[300px] border-border-default'>
        <CardHeader className='m-3 flex h-7 w-[130px] justify-center rounded-lg bg-green p-0'>
          <CardTitle className='text-center text-sm font-medium text-white'>
            Project Manager
          </CardTitle>
        </CardHeader>

        <CardContent className='h-8 text-xl font-bold text-text'>
          <p>정태승</p>
        </CardContent>

        <CardFooter className='text-text-disabled'>
          <p>hi563@naver.com</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default MemberCardComponent;
