interface LogoProps {
  variant?: 'navLogo' | 'authLogo';
  onClick?: () => void;
}

const Logo = ({ variant = 'navLogo', onClick }: LogoProps) => {
  const variantStyles = {
    navLogo: 'text-2xl',
    authLogo: 'text-5xl',
  };

  return (
    <>
      <div>
        <p className={`${variantStyles[variant]} font-bold`} onClick={onClick}>
          Threadly
        </p>
      </div>
    </>
  );
};

export default Logo;
