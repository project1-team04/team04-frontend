import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const ProjectCardComponent = () => {
  return (
    <>
      <Card className='h-[150px] w-[260px] rounded-[15px] border-none'>
        <CardHeader className='h-[100px] rounded-t-[15px] bg-[#8280FF]/20'>
          <CardTitle className='text-2xl'>프로젝트 명</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-lg'>Issue | 숫자</p>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCardComponent;
