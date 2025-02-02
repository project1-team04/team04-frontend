import { useCustomModalStore } from '@/stores/useCustomModalStore';
import Backdrop from './Backdrop';
import Button from './Button';

const CustomModal = () => {
  const { isOpen, closeModal, icon, title, content, buttons } =
    useCustomModalStore();

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <Backdrop onClick={closeModal} />
      <div className='flex max-w-[400px] flex-col items-center justify-center gap-y-6 rounded-2xl bg-bg-light p-6'>
        <header className='flex flex-col items-center gap-y-2'>
          {icon && icon}
          <p className='text-2xl font-semibold'>{title}</p>
        </header>

        {content && <div className='w-full text-center'>{content}</div>}

        <footer className='flex w-full justify-center gap-4'>
          {buttons.map((button, index) => (
            <Button
              key={index}
              children={button.text}
              variant={button.variant || 'primary'}
              className='w-fit'
              onClick={() => {
                button.onClick?.();
                closeModal();
              }}
            />
          ))}
        </footer>
      </div>
    </div>
  );
};

export default CustomModal;
