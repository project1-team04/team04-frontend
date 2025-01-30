import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/routers/paths';
import EditPasswordForm from '@/components/EditPasswordForm';
import EditProfileInfo from '@/components/EditProfileInfo';
import Button from '@/components/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RiEdit2Line } from 'react-icons/ri';
import { IoChevronForward } from 'react-icons/io5';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditingProfileInfo, setIsEditingProfileInfo] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  // 사진, 이름 변경
  if (isEditingProfileInfo) {
    return <EditProfileInfo onClose={() => setIsEditingProfileInfo(false)} />;
  }

  // 비밀번호 변경
  if (isEditingPassword) {
    return <EditPasswordForm onClose={() => setIsEditingPassword(false)} />;
  }

  return (
    <div className='div m-auto grid w-1/3 max-w-[450px] divide-y-2 divide-divider-default rounded-2xl bg-bg-deep px-4'>
      <div className='flex w-full flex-col items-center gap-2 pb-4 pt-8'>
        {/* TODO) UserStore에서 사용자 정보 가져오기 */}
        <div
          className='relative inline-block cursor-pointer'
          onClick={() => setIsEditingProfileInfo(true)}
        >
          <Avatar className='h-20 w-20'>
            <AvatarImage />
            <AvatarFallback />
          </Avatar>
          <RiEdit2Line
            className='absolute bottom-0 right-0 rounded-full bg-white p-1 text-text-sub shadow-md'
            size={20}
            onClick={() => setIsEditingProfileInfo(true)}
          />
        </div>
        <div className='flex flex-col items-center'>
          <p className='flex items-center gap-1 text-xl font-bold'>
            양혜림
            <RiEdit2Line
              className='cursor-pointer text-text-sub'
              onClick={() => setIsEditingProfileInfo(true)}
            />
          </p>
          <p className='text-text-sub'>hlhlstar@naver.com</p>
        </div>
      </div>
      <div className='flex w-full flex-col gap-2 py-4'>
        <Button onClick={() => setIsEditingPassword(true)}>
          비밀번호 변경
        </Button>
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
