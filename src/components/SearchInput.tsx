import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...props }: InputProps) => {
  return (
    <>
      <Input
        type='text'
        placeholder='Search for anything...'
        className={`h-[43px] w-[180px] border-none bg-gray text-sm placeholder:text-text-disabled`}
        {...props}
      />
    </>
  );
};

export default SearchInput;
