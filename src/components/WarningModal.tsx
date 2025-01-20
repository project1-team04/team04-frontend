import { Button } from '@/components/ui/button';
import { RiErrorWarningLine } from 'react-icons/ri';
import Backdrop from './Backdrop';
import { useModalStore } from '@/stores/useModalStore';

interface WarningModalProps {
  title: string;
  sub: string;
}

const WarningModal = ({ title, sub }: WarningModalProps) => {
  const { isOpen, close } = useModalStore();

  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <Backdrop onClick={close} />
        <div className='flex h-[300px] w-[400px] flex-col items-center justify-center bg-bg-light'>
          <RiErrorWarningLine className='h-[60px] w-[60px]' />
          <div className='m-6 mt-7 text-center'>
            <p className='text-2xl font-semibold'>{title}</p>
            <p className='font-base text-sm'>{sub}</p>
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
