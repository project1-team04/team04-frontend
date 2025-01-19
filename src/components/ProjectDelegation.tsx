import DropDown from './DropDown';

// 프로젝트 명, 해당 프로젝트의 멤버들
const ProjectDelegation = () => {
  return (
    <div>
      <div className='flex h-[60px] w-full items-center justify-between gap-10 rounded-xl bg-white p-8 pl-10'>
        <span className='text-lg font-semibold text-text'>Threadly</span>

        <DropDown buttonText={'위임'} items={['멤버1', '멤버2']} />
      </div>
    </div>
  );
};

export default ProjectDelegation;
