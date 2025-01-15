import { IoIosArrowDown } from 'react-icons/io';

// props: 이름, 이미지 소스, 이미지 alt
const ProfileComponent = () => {
  return (
    <>
      <div className='flex items-center justify-center w-48 h-24 gap-3'>
        <p className='inline-flex'>권보령</p>
        <img src='' alt='' className='rounded-lg h-9 w-9' />
        <IoIosArrowDown />
      </div>
    </>
  );
};

export default ProfileComponent;
