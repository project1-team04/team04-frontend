import Button from '@/components/Button';
import DropDown from '@/components/DropDown';

const ProfileDelegatePage = () => {
  return (
    <>
      <div className='m-auto flex h-[90%] w-[75%] flex-col items-center rounded-2xl bg-gray p-8'>
        <div className='flex h-[87%] w-4/5 flex-col bg-orange'>
          {/* 프로젝트 목록 보여주기 => 컴포넌트화 */}
          {/* 구간 스크롤 */}
          <div className='flex h-[100px] w-full gap-10 rounded-xl bg-red p-4'>
            <div className='text-lg font-semibold text-text'>프로젝트명</div>

            <DropDown buttonText={'위임'} items={['멤버1', '멤버2']} />
          </div>
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
