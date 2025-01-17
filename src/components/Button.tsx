import { Button } from './ui/button';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'negative';
}

const ButtonComponent = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary: 'bg-purple hover:bg-purple-hover text-white',
    secondary: 'bg-gray hover:bg-gray-hover',
    outline: 'border border-default hover:bg-gray-hover',
    negative: 'bg-red hover:bg-red-hover text-white',
  };

  return (
    <Button
      className={`${variantStyles[variant]} w-full text-center text-base`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
