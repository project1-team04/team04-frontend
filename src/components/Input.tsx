import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const InputComponent = ({ type, placeholder }: InputProps) => {
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        className={`h-[40px] w-full`}
      />
    </>
  );
};

export default InputComponent;
