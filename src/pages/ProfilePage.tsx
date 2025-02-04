import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/routers/paths';
import { useGetUser } from '@/hooks/useUser';
import { useDeactivateUser } from '@/hooks/useAuthMutation';
import { useCustomModalStore } from '@/stores/useCustomModalStore';
import EditPasswordForm from '@/components/EditPasswordForm';
import EditProfileInfo from '@/components/EditProfileInfo';
import Button from '@/components/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RiEdit2Line } from 'react-icons/ri';
import { IoChevronForward } from 'react-icons/io5';
import { IoWarning } from 'react-icons/io5';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditingProfileInfo, setIsEditingProfileInfo] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const showModal = useCustomModalStore((state) => state.showModal);
  const { mutate: deactivateUserMutate } = useDeactivateUser();
  const { data: user } = useGetUser();

  // 사진, 이름 변경
  if (isEditingProfileInfo) {
    return <EditProfileInfo onClose={() => setIsEditingProfileInfo(false)} />;
  }

  // 비밀번호 변경
  if (isEditingPassword) {
    return <EditPasswordForm onClose={() => setIsEditingPassword(false)} />;
  }

  return (
    <div className='div m-auto grid w-[300px] min-w-min divide-y-2 divide-divider-default rounded-2xl bg-bg-deep px-4'>
      <div className='flex w-full flex-col items-center gap-2 pb-4 pt-8'>
        <div className='relative inline-block'>
          <Avatar className='h-20 w-20'>
            <AvatarImage
              src={user.profileImageUrl ?? undefined}
              alt={`${user.username}의 프로필 이미지`}
            />
            <AvatarFallback />
          </Avatar>
          <button
            className='absolute bottom-0 right-0 flex size-5 items-center justify-center rounded-full bg-white p-1 text-text-sub shadow-md'
            onClick={() => setIsEditingProfileInfo(true)}
          >
            <RiEdit2Line />
          </button>
        </div>
        <div className='flex flex-col items-center'>
          <p
            className='flex cursor-pointer items-center gap-1 text-xl font-bold'
            onClick={() => setIsEditingProfileInfo(true)}
          >
            {user.username}
          </p>
          <p className='text-text-sub'>{user.email}</p>
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

      <div
        className='flex cursor-pointer items-center justify-end gap-1 py-4 text-sm text-text-sub'
        onClick={() =>
          showModal({
            icon: <IoWarning size={40} className='text-red' />,
            title: '정말 탈퇴하시겠습니까?',
            content: '탈퇴 버튼 클릭 시, 계정이 삭제되며 복구되지 않습니다.',
            buttons: [
              {
                text: '취소',
                variant: 'outline',
              },
              {
                text: '탈퇴',
                variant: 'negative',
                onClick: () => deactivateUserMutate(),
              },
            ],
          })
        }
      >
        <p>회원탈퇴</p>
        <IoChevronForward />
      </div>
    </div>
  );
};

export default ProfilePage;
