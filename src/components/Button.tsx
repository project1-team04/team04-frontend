import { Button as UiButton } from './ui/button';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'negative';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <UiButton
      variant={variant}
      size={size}
      className={`w-full text-center`}
      {...props}
    >
      {children}
    </UiButton>
  );
};

export default Button;
