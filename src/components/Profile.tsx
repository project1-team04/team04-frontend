import { IoIosArrowDown } from 'react-icons/io';
import DropDown from './DropDown';

interface ProfileProps {
  name: string;
  src?: string;
  alt: string;
}

const ProfileComponent = ({ name, src, alt }: ProfileProps) => {
  return (
    <>
      <div className='flex h-24 w-48 items-center justify-center gap-3'>
        <p className='inline-flex'>{name}</p>
        {src ? (
          <img src={src} alt={alt} className='h-9 w-9 rounded-lg' />
        ) : (
          <div className='h-9 w-9 rounded-lg bg-gray'></div>
        )}
        <DropDown
          buttonText={<IoIosArrowDown />}
          items={['프로필', '로그아웃']}
          className='ml-[-5px] w-8 border-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0'
        />
      </div>
    </>
  );
};

export default ProfileComponent;
