interface LogoProps {
  variant?: 'navLogo' | 'authLogo';
  onClick?: () => void;
}

const variantStyles = {
  navLogo: 'text-2xl',
  authLogo: 'text-5xl',
};

const Logo = ({ variant = 'navLogo', onClick }: LogoProps) => {
  return (
    <div>
      <p className={`${variantStyles[variant]} font-bold`} onClick={onClick}>
        Threadly
      </p>
    </div>
  );
};

export default Logo;
