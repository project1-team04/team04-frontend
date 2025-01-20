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
        className='h-[130px] w-[230px] transform rounded-[15px] border-none transition-transform duration-200 hover:scale-105'
        onClick={onClick}
      >
        <CardHeader className='flex h-[85px] justify-center rounded-t-[15px] bg-[#8280FF]/20'>
          <CardTitle className='text-2xl'>{title}</CardTitle>
        </CardHeader>

        <CardContent className='flex justify-end pt-3 text-base'>
          <p>
            Issue | <span className='text-[#00B69B]'>{issue}</span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCardComponent;
