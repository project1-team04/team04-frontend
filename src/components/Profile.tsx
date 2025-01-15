// import { IoIosArrowDown } from 'react-icons/io';

// props: 이름, 이미지 소스, 이미지 alt
const ProfileComponent = () => {
  return (
    <>
      <div className='flex items-center justify-center w-48 h-24 gap-2 bg-gray-hover'>
        <p className='inline-flex'>권보령</p>
        <img src='' alt='' className='w-8 h-8 bg-purple' />
        <p>아이콘</p>
        {/* <IoIosArrowDown /> */}
      </div>
    </>
  );
};

export default ProfileComponent;
