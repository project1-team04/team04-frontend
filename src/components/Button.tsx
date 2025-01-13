import { Button } from './ui/button';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'createDone' | 'edit';
}

const ButtonComponent = ({
  children,
  variant = 'default',
  ...props
}: ButtonProps) => {
  const variantStyles = {
    default: 'w-[290px]',
    createDone: 'w-[500px]',
    edit: 'w-[190px]',
  };

  return (
    <Button
      className={`h-[44px] ${variantStyles[variant]} bg-[#6224FD] text-center text-base`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
