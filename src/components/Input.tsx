import { Input as UiInput } from './ui/input';
import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', ...props }, ref) => {
    return (
      <UiInput
        type={type}
        placeholder={props.placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
