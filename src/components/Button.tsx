import { Button } from './ui/button';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'negative';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const ButtonComponent = ({
  children,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={`w-full text-center`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
