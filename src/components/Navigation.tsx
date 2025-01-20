import { Link } from 'react-router-dom';
import { paths } from '@/routers/paths';
import Logo from './Logo';
import ProfileComponent from './Profile';

interface NavigationProps {
  name: string;
  src?: string;
  alt: string;
}

const NavigationComponent = ({ name, src, alt }: NavigationProps) => {
  return (
    <nav className='z-16 flex w-full items-center justify-between border-b-[1px] border-divider-default px-16 py-4'>
      <Link to={paths.projects.root}>
        <Logo />
      </Link>
      <ProfileComponent name={name} src={src} alt={alt} />
    </nav>
  );
};

export default NavigationComponent;
