interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      <h1 className='inline-flex text-3xl font-bold'>{children}</h1>
    </header>
  );
};

export default Header;
