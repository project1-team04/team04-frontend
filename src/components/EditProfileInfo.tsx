import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetUser } from '@/hooks/useUser';
import Button from './Button';
import Input from './Input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { RiUpload2Line } from 'react-icons/ri';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface EditProfileInfoProps {
  onClose: () => void;
}

const EditProfileInfo = ({ onClose }: EditProfileInfoProps) => {
  const { data: user } = useGetUser();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      username: user.username,
      profileImage: user.profileImageUrl as string | File | null,
    },
  });

  const [preview, setPreview] = useState<string | null>(user.profileImageUrl);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];

    if (image) {
      setPreview(URL.createObjectURL(image));
      setValue('profileImage', image);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setValue('profileImage', null);
  };

  // 프로필 수정
  const onSubmit = (data: any) => {
    console.log(data);
    console.log(preview);

    // 성공시 onClose
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
