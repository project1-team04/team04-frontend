import { Button } from '@/components/ui/button';
import { RiErrorWarningLine } from 'react-icons/ri';
import Backdrop from './Backdrop';
import { useModalStore } from '@/stores/useModalStore';

const WarningModal = () => {
  const { isOpen, close } = useModalStore();

  if (!isOpen) return null; // 모달이 열려 있지 않으면 아무것도 렌더링하지 않음

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <Backdrop onClick={close} />
        <div className='flex h-[300px] w-[400px] flex-col items-center justify-center bg-bg-light'>
          <RiErrorWarningLine className='h-[60px] w-[60px]' />
          <div className='m-6 mt-7 text-center'>
            <p className='text-2xl font-semibold'>정말 탈퇴 하시겠습니까?</p>
            <p className='font-base text-sm'>
              탈퇴 후에는 해당 이메일로 재가입이 불가능합니다.
            </p>
          </div>
          <div className='flex gap-x-3'>
            <Button variant={'outline'} children={'아니오'} onClick={close} />
            <Button variant={'negative'} children={'네'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WarningModal;
