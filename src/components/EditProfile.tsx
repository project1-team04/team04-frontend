import Button from './Button';
import Input from './Input';

interface EditProfileProps {
  onCancel: () => void;
}

const EditProfile = ({ onCancel }: EditProfileProps) => {
  return (
    <div className='div m-auto grid w-1/3 max-w-[450px] divide-y-2 divide-divider-default rounded-2xl bg-bg-deep px-4'>
      <div className='flex flex-col gap-2 py-4'>
        <p className='text-xl font-bold'>비밀번호 변경</p>
        <p className='text-sm text-text-sub'>
          비밀번호는 8~16자 길이로, 영문 대소문자, 숫자, 특수문자(@, !)를 각각
          최소 1개 이상 포함해야 합니다.
        </p>
      </div>
      <form className='flex flex-col gap-2 py-4'>
        <Input placeholder='현재 비밀번호' />
        <Input placeholder='변경할 비밀번호' />
        <Input placeholder='비밀번호 확인' />
        <div className='flex gap-4 pt-2'>
          <Button variant='outline' onClick={onCancel} className='flex-1 bg-bg'>
            취소
          </Button>
          {/* TODO) onClick 이벤트 핸들러에서 api 호출 후 paths.profile.root로 navigate */}
          <Button className='flex-1'>변경하기</Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
