import Logo from './Logo';
import ProfileComponent from './Profile';
interface NavigationProps {
  name: string;
  src?: string;
  alt: string;
}

const NavigationComponent = ({ name, src, alt }: NavigationProps) => {
  return (
    <>
      <div className='z-16 border-b-[1px] border-divider-default'>
        <nav className='flex items-center justify-between w-full h-24 px-20'>
          <Logo />
          <ProfileComponent name={name} src={src} alt={alt} />
        </nav>
      </div>
    </>
  );
};

export default NavigationComponent;
