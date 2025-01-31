import { FieldErrors, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { checkPasswordValidation } from '@/utils/authValidation';
import instance from '@/apis/instance';
import Button from './Button';
import Input from './Input';

interface EditPasswordFormProps {
  onClose: () => void;
}

type EditPasswordFormInputs = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const EditPasswordForm = ({ onClose }: EditPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<EditPasswordFormInputs>();

  const onSubmit = async ({
    oldPassword,
    newPassword,
  }: EditPasswordFormInputs) => {
    try {
      const res = await instance.post('auth/change-password', {
        oldPassword,
        newPassword,
      });

      // FIXME) auth/change-password 400, 401 응답코드 추가되면 setError 메시지 보완
      if (res.status === 200) {
        alert('비밀번호가 변경되었습니다.');
        onClose();
      } else {
        setError('root', {
          message:
            '비밀번호 변경에 실패했습니다. 입력한 정보를 다시 확인해 주세요.',
        });
      }
    } catch (error) {
      setError('root', {
        message:
          '서버와의 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요.',
      });
    }
  };

  return (
    <div className='div m-auto grid w-1/3 min-w-min max-w-[450px] divide-y-2 divide-divider-default rounded-2xl bg-bg-deep px-4'>
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
          type='password'
          placeholder='현재 비밀번호'
          aria-invalid={
            isSubmitted ? (errors.oldPassword ? 'true' : 'false') : undefined
          }
          {...register('oldPassword', {
            required: '현재 비밀번호를 입력해 주세요.',
            validate: (value) => checkPasswordValidation(value),
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
          type='password'
          placeholder='변경할 비밀번호'
          aria-invalid={
            isSubmitted ? (errors.newPassword ? 'true' : 'false') : undefined
          }
          {...register('newPassword', {
            required: '변경할 비밀번호를 입력해 주세요.',
            validate: (value) => {
              if (value === getValues('oldPassword')) {
                return '현재 비밀번호와 동일한 비밀번호는 사용할 수 없습니다.';
              }

              return checkPasswordValidation(value);
            },
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
          type='password'
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
            validate: (value) =>
              value === getValues('newPassword') ||
              '비밀번호가 일치하지 않습니다.',
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

        <ErrorMessage
          errors={errors as FieldErrors<any>}
          name='root'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />

        <div className='flex gap-4 pt-2'>
          <Button
            children={'취소'}
            variant='outline'
            onClick={onClose}
            className='flex-1 bg-bg'
          />
          <Button
            children={'변경하기'}
            type='submit'
            disabled={isSubmitting}
            className='flex-1'
          />
        </div>
      </form>
    </div>
  );
};

export default EditPasswordForm;
