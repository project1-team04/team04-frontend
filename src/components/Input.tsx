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
  const variantStyles = {
    default: 'w-[250px]',
    createProject: 'w-[400px]',
  };

  return (
    <>
      <div className={`${variantStyles[varient]}`}>
        <Input
          type={type}
          placeholder={props.placeholder}
          className='h-[43px] w-full border-border-default placeholder:text-text-disabled'
          {...props}
        />
      </div>
    </>
  );
};

export default InputComponent;
