import { Input as UiInput } from './ui/input';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  iconPosition?: 'left' | 'right';
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', iconPosition, icon, ...props }, ref) => {
    return (
      <div className='flex w-full gap-1'>
        {iconPosition === 'left' && icon}
        <UiInput
          type={type}
          placeholder={props.placeholder}
          ref={ref}
          {...props}
        />
        {iconPosition === 'right' && icon}
      </div>
    );
  }
);

export default Input;
