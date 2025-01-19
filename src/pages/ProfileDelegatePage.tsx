import Button from '@/components/Button';
import ProjectDelegation from '@/components/ProjectDelegation';

const ProfileDelegatePage = () => {
  return (
    <>
      <div className='m-auto flex h-[90%] w-[75%] flex-col items-center rounded-2xl bg-gray p-8'>
        {/* 구간 스크롤 */}
        <div className='flex h-[87%] w-4/5 flex-col bg-orange'>
          <ProjectDelegation />
        </div>

        <div className='mt-5 flex w-3/5 gap-5'>
          <Button
            children={'취소'}
            variant='secondary'
            className='border-default flex-1 border'
          />
          <Button children={'위임 완료'} className='flex-1' />
        </div>
      </div>
    </>
  );
};

export default ProfileDelegatePage;
