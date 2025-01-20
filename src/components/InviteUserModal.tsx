import { Input } from './ui/input';
import { Button } from './ui/button';
import Backdrop from './Backdrop';
import { useModalStore } from '@/stores/useModalStore';

const InviteUserModal = () => {
  const { isOpen, close } = useModalStore();

  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <Backdrop onClick={close} />
        <div className='flex h-72 w-96 flex-col items-center justify-center gap-6 bg-bg-light'>
          <p className='text-2xl font-bold'>인원 초대</p>
          <div className='w-64'>
            <span className='text-sm'>
              이메일 <span className='text-red'>*</span>
            </span>
            <Input className='bg-white' />
          </div>
          <div className='ml-auto mr-6 mt-5 flex gap-3'>
            <Button variant={'outline'} children={'취소'} onClick={close} />
            <Button children={'추가'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteUserModal;
