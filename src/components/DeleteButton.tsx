import { Button } from './ui/button';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const DeleteButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      className={`h-8 bg-red p-2 text-xs text-white hover:bg-[#c10505]`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default DeleteButton;
