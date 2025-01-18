import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const InputComponent = ({ type = 'text', ...props }: InputProps) => {
  return (
    <>
      <Input type={type} placeholder={props.placeholder} {...props} />
    </>
  );
};

export default InputComponent;
