import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  varient?: 'default' | 'createProject';
}

const InputComponent = ({
  type,
  varient = 'default',
  ...props
}: InputProps) => {
  const varientStyles = {
    default: 'w-[250px]',
    createProject: 'w-[400px]',
  };

  return (
    <>
      <Input
        type={type}
        placeholder={props.placeholder}
        className={`h-[43px] ${varientStyles[varient]} m-3 border-border-default placeholder:text-text-disabled`}
        {...props}
      />
    </>
  );
};

export default InputComponent;
