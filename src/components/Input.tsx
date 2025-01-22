import { Input as UiInput } from './ui/input';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const Input = ({ type = 'text', ...props }: InputProps) => {
  return <UiInput type={type} placeholder={props.placeholder} {...props} />;
};

export default Input;
