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
// 직책이 PM과 Member로 나뉨 -> CardTitle의 스타일 달라짐
const MemberCardComponent = () => {
  return (
    <>
      <Card className='h-[125px] w-[300px] border-border-default'>
        <CardHeader className='m-4 mb-2 flex h-7 w-[130px] justify-center rounded-lg bg-green p-0'>
          <CardTitle className='text-center text-sm font-medium text-white'>
            Project Manager
          </CardTitle>
        </CardHeader>

        <CardContent className='h-8 text-xl font-bold text-text'>
          <p>정태승</p>
        </CardContent>

        <CardFooter className='text-sm text-text-disabled'>
          <p>hi563@naver.com</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default MemberCardComponent;
