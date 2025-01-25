import { Button } from '@/components/ui/button';
import Backdrop from './Backdrop';
import { useModalStore } from '@/stores/useModalStore';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  css?: string;
  icon?: React.ReactNode;
  buttons: ButtonConfig[];
}

interface ButtonConfig {
  text: string;
  variantStyle?: 'primary' | 'secondary' | 'outline' | 'negative';
  onClick: () => void;
}

const Modal = ({ title, content, icon, css, buttons }: ModalProps) => {
  const { isOpen, close } = useModalStore();

  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <Backdrop onClick={close} />
        <div className='flex h-[300px] w-[400px] flex-col items-center justify-center bg-bg-light'>
          {icon && <>{icon}</>}

          <p className='m-5 text-2xl font-semibold'>{title}</p>
          <div className={css}>{content}</div>

          <div className='m-5 flex gap-3'>
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variantStyle || 'primary'}
                onClick={() => {
                  button.onClick();
                  close();
                }}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
