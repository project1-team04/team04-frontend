import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from './Button';
import Input from './Input';

interface EditProfileProps {
  onCancel: () => void;
}

type FormInputs = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const validatePassword = (value: string) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!])[a-zA-Z\d@!]{8,16}$/;
  return passwordRegex.test(value) || '비밀번호 형식에 맞지 않습니다.';
};

const EditProfile = ({ onCancel }: EditProfileProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <div className='div m-auto grid w-1/3 max-w-[450px] divide-y-2 divide-divider-default rounded-2xl bg-bg-deep px-4'>
      <div className='flex flex-col gap-2 py-4'>
        <p className='text-xl font-bold'>비밀번호 변경</p>
        <p className='text-sm text-text-sub'>
          영문, 숫자, 특수문자(@, !)를 포함하여 8~16자로 입력해주세요.
        </p>
      </div>
      <form
        className='flex flex-col gap-2 py-4'
        onSubmit={handleSubmit(onSubmit)}
        noValidate // 기본 HTML5 검증 메세지 제거
      >
        <Input
          placeholder='현재 비밀번호'
          aria-invalid={
            isSubmitted ? (errors.oldPassword ? 'true' : 'false') : undefined
          }
          {...register('oldPassword', {
            required: '현재 비밀번호를 입력해 주세요.',
            validate: validatePassword,
          })}
        />
        <ErrorMessage
          errors={errors}
          name='oldPassword'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />

        <Input
          placeholder='변경할 비밀번호'
          aria-invalid={
            isSubmitted ? (errors.newPassword ? 'true' : 'false') : undefined
          }
          {...register('newPassword', {
            required: '변경할 비밀번호를 입력해 주세요.',
            validate: validatePassword,
          })}
        />
        <ErrorMessage
          errors={errors}
          name='newPassword'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />

        <Input
          placeholder='비밀번호 확인'
          aria-invalid={
            isSubmitted
              ? errors.confirmNewPassword
                ? 'true'
                : 'false'
              : undefined
          }
          {...register('confirmNewPassword', {
            required: '변경할 비밀번호를 한 번 더 입력해 주세요.',
            validate: (value, formValues) => {
              return (
                value === formValues.newPassword ||
                '비밀번호가 일치하지 않습니다.'
              );
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name='confirmNewPassword'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />

        <div className='flex gap-4 pt-2'>
          <Button variant='outline' onClick={onCancel} className='flex-1 bg-bg'>
            취소
          </Button>
          {/* TODO) onClick 이벤트 핸들러에서 api 호출 후 paths.profile.root로 navigate */}
          <Button type='submit' disabled={isSubmitting} className='flex-1'>
            변경하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
