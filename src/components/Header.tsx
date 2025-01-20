interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <h1 className='inline-flex text-3xl font-bold'>{children}</h1>
    </>
  );
};

export default Header;
