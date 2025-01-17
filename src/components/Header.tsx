interface HeaderProps {
  children: React.ReactNode;
}

const HeaderComponent = ({ children }: HeaderProps) => {
  return (
    <>
      <h1 className='text-text-DEFAULT inline-flex text-3xl font-bold'>
        {children}
      </h1>
    </>
  );
};

export default HeaderComponent;
