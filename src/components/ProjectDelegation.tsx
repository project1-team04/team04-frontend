import DropDown from './DropDown';

interface ProjectDelegationProps {
  title: string;
  member: string[];
}

const ProjectDelegation = ({ title, member }: ProjectDelegationProps) => {
  return (
    <>
      <div className='my-2 flex h-[60px] w-full items-center justify-between gap-10 rounded-xl bg-white p-8 pl-10'>
        <span className='text-lg font-semibold text-text'>{title}</span>

        <DropDown buttonText={'위임'} items={member} />
      </div>
    </>
  );
};

export default ProjectDelegation;
