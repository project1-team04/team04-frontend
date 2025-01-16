interface LogoProps {
  variant?: 'navLogo' | 'loginLogo';
}

const Logo = ({ variant = 'navLogo' }: LogoProps) => {
  const variantStyles = {
    navLogo: 'text-2xl',
    loginLogo: 'text-5xl',
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
