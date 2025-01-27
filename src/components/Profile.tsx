import { useNavigate } from 'react-router-dom';
import { paths } from '@/routers/paths';
import { logout } from '@/apis/authApi';
import DropDown from './DropDown';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { IoIosArrowDown } from 'react-icons/io';

interface ProfileProps {
  name: string;
  src?: string;
  alt: string;
}

const Profile = ({ name, src, alt }: ProfileProps) => {
  const navigate = useNavigate();
  const dropdownItems = [
    {
      label: '프로필',
      onClick: () => navigate(paths.profile.root),
    },
    {
      label: '로그아웃',
      onClick: () => {
        logout();
        // FIXME) 토큰 유무에 따른 라우팅 로직 추가 후 아래 navigate 삭제
        navigate(paths.auth.login.fullPath);
      },
    },
  ];

  return (
    <div className='flex items-center justify-center gap-3'>
      <p>{name}</p>

      <Avatar>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback />
      </Avatar>

      <DropDown
        buttonText={<IoIosArrowDown />}
        items={dropdownItems}
        className='ml-[-5px] w-8 border-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0'
      />
    </div>
  );
};

export default Profile;
