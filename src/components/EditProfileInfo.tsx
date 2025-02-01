import Button from './Button';
import Input from './Input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { RiUpload2Line } from 'react-icons/ri';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface EditProfileInfoProps {
  onClose: () => void;
}

const EditProfileInfo = ({ onClose }: EditProfileInfoProps) => {
  return (
    <div className='div m-auto flex w-[300px] min-w-min flex-col gap-8 rounded-2xl bg-bg-deep p-4'>
      {/* TODO) defalutValue로 기존 사진과 이름 가져오기 */}
      <form
        className='flex w-full flex-col items-center gap-y-4'
        noValidate // 기본 HTML5 검증 메세지 제거
      >
        <div className='relative my-4 inline-block'>
          <Avatar className='h-32 w-32'>
            <AvatarImage />
            <AvatarFallback />
          </Avatar>
          <div className='absolute bottom-0 right-0 flex items-center divide-x-2 rounded-full bg-white shadow-md'>
            <button className='flex items-center justify-center rounded-l-full p-2 hover:bg-gray-hover'>
              <RiDeleteBin5Line />
            </button>
            <button className='flex items-center justify-center rounded-r-full p-2 hover:bg-gray-hover'>
              <RiUpload2Line />
            </button>
          </div>
        </div>

        <div className='flex w-full items-center gap-2'>
          <label className='flex-none'>이름</label>
          <Input />
        </div>

        <div className='mt-4 flex min-w-full gap-4'>
          <Button
            children={'취소'}
            variant='outline'
            onClick={onClose}
            className='flex-1 bg-bg'
          />
          <Button children={'변경하기'} type='submit' className='flex-1' />
        </div>
      </form>
    </div>
  );
};

export default EditProfileInfo;
