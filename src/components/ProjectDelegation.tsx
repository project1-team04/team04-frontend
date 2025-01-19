import DropDown from './DropDown';

const ProjectDelegation = () => {
  return (
    <div>
      <div className='flex h-[100px] w-full gap-10 rounded-xl bg-red p-4'>
        <div className='text-lg font-semibold text-text'>프로젝트명</div>

        <DropDown buttonText={'위임'} items={['멤버1', '멤버2']} />
      </div>
    </div>
  );
};

export default ProjectDelegation;
