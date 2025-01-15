import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

const InputComponent = ({ type, ...props }: InputProps) => {
  return (
    <>
      <Input
        type={type}
        placeholder={props.placeholder}
        className={`h-[40px] w-full border-border-default placeholder:text-text-disabled`}
        {...props}
      />
    </>
  );
};

export default InputComponent;
