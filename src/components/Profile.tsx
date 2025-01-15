import { IoIosArrowDown } from 'react-icons/io';

interface ProfileProps {
  name: string;
  src: string;
  alt: string;
}

const ProfileComponent = ({ name, src, alt }: ProfileProps) => {
  return (
    <>
      <div className='flex items-center justify-center w-48 h-24 gap-3'>
        <p className='inline-flex'>{name}</p>
        <img src={src} alt={alt} className='rounded-lg h-9 w-9' />
        <IoIosArrowDown />
      </div>
    </>
  );
};

export default ProfileComponent;
