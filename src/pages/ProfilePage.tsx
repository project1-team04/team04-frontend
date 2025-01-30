import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/routers/paths';
import EditProfile from '@/components/EditProfile';
import Button from '@/components/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IoChevronForward } from 'react-icons/io5';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <EditProfile onClose={() => setIsEditing(false)} />;
  }

  return (
    <div className='div m-auto grid w-1/3 max-w-[450px] divide-y-2 divide-divider-default rounded-2xl bg-bg-deep px-4'>
      <div className='flex w-full flex-col items-center gap-2 pb-4 pt-8'>
        {/* TODO) UserStore에서 사용자 정보 가져오기 */}
        {/* TODO) 프로필 사진, 이름 변경 버튼 추가 */}
        <Avatar className='h-20 w-20'>
          <AvatarImage />
          <AvatarFallback />
        </Avatar>
        <div className='flex flex-col items-center'>
          <p className='text-xl font-bold'>양혜림</p>
          <p className='text-text-sub'>hlhlstar@naver.com</p>
        </div>
      </div>
      <div className='flex w-full flex-col gap-2 py-4'>
        <Button onClick={() => setIsEditing(true)}>비밀번호 변경</Button>
        <Button onClick={() => navigate(paths.profile.delegate.fullPath)}>
          프로젝트 권한 위임
        </Button>
      </div>
      <div className='flex cursor-pointer items-center justify-end gap-1 py-4 text-sm text-text-sub'>
        <p>회원탈퇴</p>
        <IoChevronForward />
      </div>
    </div>
  );
};

export default ProfilePage;
