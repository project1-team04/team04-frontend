import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <div className='flex w-full items-center justify-center rounded-lg border-none bg-bg-deep'>
      <IoSearchOutline className='ml-3' />
      <Input
        type='text'
        placeholder='Search for anything...'
        className={`h-11 truncate border-0 border-none bg-bg-deep text-sm shadow-none ring-0 placeholder:text-text-disabled focus-visible:ring-0 focus-visible:ring-offset-0`}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
