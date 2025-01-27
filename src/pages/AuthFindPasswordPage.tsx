import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import instance from '@/apis/instance';
import { paths } from '@/routers/paths';
import Button from '@/components/Button';
import Input from '@/components/Input';
import AuthNavLinks from '@/components/AuthNavLinks';

const AuthFindPasswordPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isSubmitted, isSubmitting, isValid },
  } = useForm({ mode: 'onBlur' });

  const [isEmailChecked, setIsEmailChecked] = useState(false); // 이메일 검증 여부
  const [isChecking, setIsChecking] = useState(false); // 이메일 확인 중인지 여부

  const handleCheckEmail = async () => {
    if (isChecking) return;

    const email = getValues('email');
    if (!email) return;

    setIsChecking(true);

    try {
      const res = await instance.post('auth/validate-email', { email });

      if (res.data) {
        setIsEmailChecked(true);
      } else {
        setError('email', { message: '가입되지 않은 이메일입니다.' });
        setIsEmailChecked(false);
      }
    } catch (error) {
      setError('email', {
        message: '예상치 못한 오류가 발생했습니다. 다시 시도해주세요.',
      });
      setIsEmailChecked(false);
    } finally {
      setIsChecking(false);
    }
  };

  // FIXME) 토큰 유무에 따른 라우팅 로직 추가 후 navigate 관련 로직 삭제
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await instance.post('auth/reset-password', { email: data.email });

      alert('임시 비밀번호가 이메일로 전송되었습니다.');
      navigate(paths.auth.login.fullPath);
    } catch (error) {
      setError('email', {
        message: '임시 비밀번호 발급에 실패했습니다. 다시 시도해주세요.',
      });
    }
  };

  return (
    <div className='mt-6 flex flex-col items-center gap-y-6'>
      {/* TODO) 폼 제출 후 바로 로그인 페이지로 리다이렉트, 임시 비밀번호로 로그인하면 바로 마이페이지로 리다이렉트 */}
      <p className='text-sm text-text-sub'>
        가입하신 이메일로 임시 비밀번호를 보내드릴게요.
      </p>
      <form
        className='flex w-[250px] flex-col gap-2'
        onSubmit={handleSubmit(onSubmit)}
        noValidate // 기본 HTML5 검증 메세지 제거
      >
        <Input
          placeholder='이메일'
          aria-invalid={
            isSubmitted ? (errors.email ? 'true' : 'false') : undefined
          }
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
          iconPosition='right'
          icon={
            <Button
              variant='outline'
              className='w-auto'
              onClick={handleCheckEmail}
              disabled={isChecking || !isValid}
            >
              확인
            </Button>
          }
        />
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />

        <Button
          type='submit'
          disabled={isSubmitting || !isEmailChecked || isChecking}
        >
          임시 비밀번호 전송
        </Button>
      </form>

      <AuthNavLinks
        leftText='로그인하기'
        rightText='회원가입하기'
        leftPath={paths.auth.login.fullPath}
        rightPath={paths.auth.signup.fullPath}
      />
    </div>
  );
};

export default AuthFindPasswordPage;
