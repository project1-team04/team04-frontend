import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  variant?: 'default' | 'projectName';
}

const InputComponent = ({
  variant = 'default',
  type,
  placeholder,
}: InputProps) => {
  const variantStyles = {
    default: 'w-[290px]',
    projectName: 'w-[500px]',
  };

  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        className={`h-[40px] ${variantStyles[variant]}`}
      />
    </>
  );
};

export default InputComponent;
