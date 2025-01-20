import { useNavigate } from 'react-router-dom';
import { paths } from '@/routers/paths';
import DropDown from './DropDown';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { IoIosArrowDown } from 'react-icons/io';

interface ProfileProps {
  name: string;
  src?: string;
  alt: string;
}

const ProfileComponent = ({ name, src, alt }: ProfileProps) => {
  const navigate = useNavigate();
  const dropdownItems = [
    {
      label: '프로필',
      onClick: () => navigate(paths.profile.root),
    },
    { label: '로그아웃', onClick: () => console.log('handleLogout') }, // TODO) 로그아웃 함수 호출
  ];

  return (
    <>
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
    </>
  );
};

export default ProfileComponent;
