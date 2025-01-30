import Button from './Button';
import Input from './Input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface EditProfileInfoProps {
  onClose: () => void;
}

const EditProfileInfo = ({ onClose }: EditProfileInfoProps) => {
  return (
    <div className='div m-auto flex w-1/3 min-w-min max-w-[450px] flex-col items-center gap-8 rounded-2xl bg-bg-deep px-4 py-8'>
      <Avatar className='h-32 w-32'>
        <AvatarImage />
        <AvatarFallback />
      </Avatar>

      {/* TODO) defalutValue로 값 가져오기 */}
      <form
        className='flex w-full items-center gap-2'
        noValidate // 기본 HTML5 검증 메세지 제거
      >
        <label>이름</label>
        {/* FIXME) input 안늘어남 */}
        <Input className='grow' />
      </form>

      <div className='flex w-full gap-4'>
        <Button
          children={'취소'}
          variant='outline'
          onClick={onClose}
          className='flex-1 bg-bg'
        />
        <Button children={'변경하기'} type='submit' className='flex-1' />
      </div>
    </div>
  );
};

export default EditProfileInfo;
