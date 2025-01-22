import { Link } from 'react-router-dom';
import { paths } from '@/routers/paths';
import Logo from '@/components/Logo';
import Profile from '@/components/Profile';

interface NavigationProps {
  name: string;
  src?: string;
  alt: string;
}

const Navigation = ({ name, src, alt }: NavigationProps) => {
  return (
    <nav className='z-16 flex h-24 w-full items-center justify-between border-b-[1px] border-divider-default px-16 py-4'>
      <Link to={paths.projects.root}>
        <Logo />
      </Link>
      <Profile name={name} src={src} alt={alt} />
    </nav>
  );
};

export default Navigation;
