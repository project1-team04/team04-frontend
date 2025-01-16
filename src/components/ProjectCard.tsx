import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface ProjectCardProps {
  title: string;
  issue: number;
  onClick: () => void;
}

const ProjectCardComponent = ({ title, issue, onClick }: ProjectCardProps) => {
  return (
    <>
      <Card
        className='h-[150px] w-[260px] rounded-[15px] border-none'
        onClick={onClick}
      >
        <CardHeader className='flex h-[100px] justify-center rounded-t-[15px] bg-[#8280FF]/20'>
          <CardTitle className='text-2xl'>{title}</CardTitle>
        </CardHeader>

        <CardContent className='flex justify-end pt-3 text-lg'>
          <p>
            Issue | <span className='text-[#00B69B]'>{issue}</span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCardComponent;
