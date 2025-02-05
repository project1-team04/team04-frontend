import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetUser, useUpdateUser } from '@/hooks/useUser';
import Button from './Button';
import Input from './Input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { RiUpload2Line } from 'react-icons/ri';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface EditProfileInfoProps {
  onClose: () => void;
}

interface EditProfileFormData {
  username: string;
  profileImage: string | File | null;
}

const EditProfileInfo = ({ onClose }: EditProfileInfoProps) => {
  const { data: user } = useGetUser();
  const { mutate: getUserMutate } = useUpdateUser();

  const { register, handleSubmit, setValue, getValues } =
    useForm<EditProfileFormData>({
      defaultValues: {
        username: user.username,
        profileImage: user.profileImageUrl,
      },
    });

  const [preview, setPreview] = useState<string | null>(user.profileImageUrl);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const imageFile = e.target.files[0];

    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setValue('profileImage', imageFile);
      setPreview(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    if (!getValues('profileImage')) return;

    setPreview(null);
    setValue('profileImage', null);
  };

  // 프로필 수정
  const onSubmit = (data: EditProfileFormData) => {
    const formData = new FormData();

    const jsonBlob = new Blob([JSON.stringify({ username: data.username })], {
      type: 'application/json',
    });
    formData.append('text', jsonBlob);

    if (data.profileImage instanceof File) {
      // 새로운 이미지 업로드
      formData.append('image', data.profileImage);
    } else if (typeof data.profileImage === 'string') {
      // 기존 이미지 유지
      formData.append('imageURL', data.profileImage);
    }
    // data.profileImage가 null이면 서버에서 이미지 삭제 처리

    getUserMutate(formData, {
      onSuccess: () => {
        onClose(); // 프로필 페이지로 이동
      },
      onError: (error) => {
        console.error('프로필 업데이트 실패', error);
      },
    });
  };

  return (
    <div className='div m-auto flex w-[300px] min-w-min flex-col gap-8 rounded-2xl bg-bg-deep p-4'>
      <form
        className='flex w-full flex-col items-center gap-y-4'
        onSubmit={handleSubmit(onSubmit)}
        noValidate // 기본 HTML5 검증 메세지 제거
      >
        <div className='relative my-4 inline-block'>
          <Avatar className='h-32 w-32'>
            <AvatarImage
              src={preview || ''}
              className='h-full w-full object-cover'
            />
            <AvatarFallback />
          </Avatar>
          <div className='absolute bottom-0 right-0 flex items-center divide-x-2 rounded-full bg-white shadow-md'>
            <button
              className='flex items-center justify-center rounded-l-full p-2 hover:bg-gray-hover'
              type='button'
              onClick={handleRemoveImage}
            >
              <RiDeleteBin5Line />
            </button>
            <label className='flex cursor-pointer items-center justify-center rounded-r-full p-2 hover:bg-gray-hover'>
              <RiUpload2Line />
              <input
                type='file'
                accept='image/*'
                {...register('profileImage')}
                onChange={handleUploadImage}
                className='hidden'
              />
            </label>
          </div>
        </div>

        <div className='flex w-full items-center gap-2'>
          <label htmlFor='username' className='flex-none'>
            이름
          </label>
          <Input id='username' {...register('username', { required: true })} />
        </div>

        <div className='mt-4 flex min-w-full gap-4'>
          <Button
            children={'취소'}
            variant='outline'
            type='button'
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
