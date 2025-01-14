interface HeaderProps {
  children: React.ReactNode;
}

// font-size, font-color, 정렬
const HeaderComponent = ({ children }: HeaderProps) => {
  return (
    <>
      <div className='border-red-500 h-[100px] border'>
        <h1 className=''>{children}</h1>
      </div>
    </>
  );
};

export default HeaderComponent;
