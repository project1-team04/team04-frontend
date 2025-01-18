interface LogoProps {
  variant?: 'navLogo' | 'authLogo';
}

const Logo = ({ variant = 'navLogo' }: LogoProps) => {
  const variantStyles = {
    navLogo: 'text-2xl',
    authLogo: 'text-5xl',
  };

  return (
    <>
      <div>
        <p className={`${variantStyles[variant]} font-bold`}>Threadly</p>
      </div>
    </>
  );
};

export default Logo;
