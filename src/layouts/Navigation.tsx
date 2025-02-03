import { Link, useLoaderData } from 'react-router-dom';
import { paths } from '@/routers/paths';
import Logo from '@/components/Logo';
import NavProfile from '@/components/NavProfile';

const Navigation = () => {
  const data = useLoaderData() as {
    email: string;
    username: string;
    profileImageUrl: string | null;
  };

  return (
    <nav className='flex w-full items-center justify-between border-b-[1px] border-divider-default px-16 py-4'>
      <Link to={paths.projects.root}>
        <Logo />
      </Link>
      <NavProfile
        name={data.username}
        src={data.profileImageUrl ?? ''}
        alt={`${data.username}의 프로필 이미지`}
      />
    </nav>
  );
};

export default Navigation;
