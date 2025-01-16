interface HeaderProps {
  children: React.ReactNode;
}

const HeaderComponent = ({ children }: HeaderProps) => {
  return (
    <>
      <div className='flex h-[120px] items-center justify-center'>
        <h1 className='text-text-DEFAULT translate-x-[-240px] transform text-3xl font-bold'>
          {children}
        </h1>
      </div>
    </>
  );
};

export default HeaderComponent;
