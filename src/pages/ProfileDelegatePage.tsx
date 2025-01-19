import Button from '@/components/Button';

const ProfileDelegatePage = () => {
  return (
    <>
      <div className='m-auto flex h-[90%] w-[75%] flex-col items-center rounded-2xl bg-gray p-8'>
        <div className='flex h-[87%] w-4/5 justify-center bg-orange'>
          프로젝트 목록 보여주기 + 드롭다운 추가, 구간 스크롤
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
