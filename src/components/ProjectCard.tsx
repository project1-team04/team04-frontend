import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface ProjectCardProps {
  title: string;
  issue: number;
  onClick: () => void;
}

const ProjectCard = ({ title, issue, onClick }: ProjectCardProps) => {
  return (
    <Card
      className='w-[230px] transform rounded-2xl border-none transition-transform duration-200 hover:scale-105'
      onClick={onClick}
    >
      <CardHeader className='flex justify-center rounded-t-2xl bg-[#8280FF]/20'>
        <CardTitle className='truncate text-2xl'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='flex items-center justify-end gap-x-2 py-4 text-sm'>
        <p>Issue</p>
        <p>|</p>
        <p className='text-green'>{issue}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
