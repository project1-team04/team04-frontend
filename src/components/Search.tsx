import SearchInput from './SearchInput';

const Search = () => {
  return (
    <div className='flex flex-col items-center h-full p-10'>
      <SearchInput />

      <div className='mt-3 divide-y divide-divider-default'>
        {/* data */}
        <p className='flex flex-col items-center p-1 text-sm'>
          이슈명1 <span className='p-1 text-xs'>담당자</span>
        </p>
      </div>
    </div>
  );
};

export default Search;
