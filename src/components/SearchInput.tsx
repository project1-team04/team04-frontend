import { Input } from './ui/input';
import { InputHTMLAttributes } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <>
      <div className='flex h-[43px] w-[200px] items-center justify-center rounded-lg border-none bg-gray'>
        <IoSearchOutline className='ml-3' />
        <Input
          type='text'
          placeholder='Search for anything...'
          className={`h-[43px] w-[170px] border-0 border-none bg-gray text-sm shadow-none ring-0 placeholder:text-text-disabled focus-visible:ring-0 focus-visible:ring-offset-0`}
          {...props}
        />
      </div>
    </>
  );
};

export default SearchInput;
