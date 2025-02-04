import { Link } from 'react-router-dom';
import { paths } from '@/routers/paths';
import { useGetUser } from '@/hooks/useUser';
import Logo from '@/components/Logo';
import NavProfile from '@/components/NavProfile';

const Navigation = () => {
  const { data: user } = useGetUser();

  return (
    <nav className='flex w-full items-center justify-between border-b-[1px] border-divider-default px-16 py-4'>
      <Link to={paths.projects.root}>
        <Logo />
      </Link>
      <NavProfile
        name={user.username}
        src={user.profileImageUrl ?? undefined}
        alt={`${user.username}의 프로필 이미지`}
      />
    </nav>
  );
};

export default Navigation;
