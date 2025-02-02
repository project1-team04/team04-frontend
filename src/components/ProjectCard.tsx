import { Card, CardHeader, CardTitle } from './ui/card';

interface ProjectCardProps {
  title: string;
  onClick: () => void;
}

const ProjectCard = ({ title, onClick }: ProjectCardProps) => {
  return (
    <Card
      className='w-[230px] transform rounded-2xl border-none transition-transform duration-200 hover:scale-105'
      onClick={onClick}
    >
      <CardHeader className='flex justify-center rounded-t-2xl bg-[#8280FF]/20'>
        <CardTitle className='truncate text-2xl'>{title}</CardTitle>
      </CardHeader>
      <div className='flex items-center justify-end gap-x-2 py-4 text-sm'></div>
    </Card>
  );
};

export default ProjectCard;
