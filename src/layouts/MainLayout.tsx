import Navigation from '@/components/Navigation';
import { Outlet } from 'react-router-dom';

const MainLayout = ({}) => {
  return (
    <>
      <div className='flex h-screen w-full flex-col'>
        <Navigation name={'권보령'} alt={'프로필 사진'} />

        <div className='flex flex-grow items-center justify-center'>
          <main className='flex-grow'>
            <Outlet />
          </main>
        </div>
      </div>
      {modalType === 'warning' && (
        <Modal
          title={'정말 삭제하시겠습니까?'}
          content={'삭제 후에는 되돌리기가 불가능합니다.'}
          icon={<RiErrorWarningLine className='h-[60px] w-[60px]' />}
          css={'text-sm mt-[-18px]'}
          buttons={[
            { text: '아니오', variantStyle: 'outline' },
            { text: '네', variantStyle: 'negative' },
          ]}
        />
      )}
    </>
  );
};

export default MainLayout;
