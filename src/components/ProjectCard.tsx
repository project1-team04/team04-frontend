import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

// props: 프로젝트명, 이슈 개수
const ProjectCardComponent = () => {
  return (
    <>
      <Card className='h-[150px] w-[260px] rounded-[15px] border-none'>
        <CardHeader className='flex h-[100px] justify-center rounded-t-[15px] bg-[#8280FF]/20'>
          <CardTitle className='text-2xl'>프로젝트 명</CardTitle>
        </CardHeader>

        <CardContent className='flex justify-end pt-3 text-lg'>
          <p>
            Issue | <span className='text-[#00B69B]'>개수</span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCardComponent;
