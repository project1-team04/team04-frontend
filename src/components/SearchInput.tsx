import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <div className='flex items-center justify-center w-full border-none rounded-lg h-11 bg-gray'>
      <IoSearchOutline className='ml-3' />
      <Input
        type='text'
        placeholder='Search for anything...'
        className={`h-11 border-0 border-none bg-gray text-sm shadow-none ring-0 placeholder:text-text-disabled focus-visible:ring-0 focus-visible:ring-offset-0`}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
