import { Button } from './ui/button';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'createDone' | 'edit' | 'delete';
}

const ButtonComponent = ({
  children,
  variant = 'default',
  ...props
}: ButtonProps) => {
  const baseStyle =
    'h-[44px] bg-purple text-center text-base text-white hover:bg-purple-hover';

  const variantStyles = {
    default: `w-[290px] ${baseStyle}`,
    createDone: `w-[500px] ${baseStyle}`,
    edit: `w-[190px]  ${baseStyle}`,
    delete: 'inline-flex h-8 p-2 text-xs bg-red hover:bg-red-hover',
  };

  return (
    <Button className={`${variantStyles[variant]} text-white`} {...props}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
