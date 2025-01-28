import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import instance from '@/apis/instance';
import { paths } from '@/routers/paths';
import Button from '@/components/Button';
import Input from '@/components/Input';
import AuthNavLinks from '@/components/AuthNavLinks';
import { IoMdCheckmarkCircle } from 'react-icons/io';

type SignupRequest = {
  name: string;
  email: string;
  password: string;
};

type SignupFormInputs = SignupRequest & {
  emailCode: string;
  confirmPassword: string;
};

const AuthSignupPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<SignupFormInputs>();

  const [isEmailChecked, setIsEmailChecked] = useState(false); // 이메일 중복 확인 여부
  const [isChecking, setIsChecking] = useState(false); // 이메일 확인 중인지 여부
  const [isCodeSent, setIsCodeSent] = useState(false); // 인증번호 발송 여부
  const [isCodeVerified, setIsCodeVerified] = useState(false); // 인증번호 확인 여부

  // 이메일 중복 확인 + 인증번호 발송
  const handleEmailVerification = async () => {
    const email = getValues('email');
    if (!email) return;

    setIsChecking(true);

    try {
      // 1. 이메일 중복 확인
      const checkResponse = await instance.post('auth/validate-email', {
        email,
      });

      if (!checkResponse.data) {
        setIsEmailChecked(true);
      } else {
        setError('email', { message: '이미 가입된 이메일입니다.' });
        setIsEmailChecked(false);
        setIsChecking(false);
        return;
      }

      // 2. 인증번호 발송
      const sendCodeResponse = await instance.post('/auth/verify-email', {
        email,
      });

      if (sendCodeResponse.status === 200) {
        setIsCodeSent(true);
        alert('인증번호가 이메일로 전송되었습니다.');
      } else {
        setError('email', {
          message: '인증번호 발송에 실패했습니다. 다시 시도해주세요.',
        });
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

  // 인증 번호 확인
  const handleEmailCodeVerification = async () => {
    const email = getValues('email');
    const emailCode = getValues('emailCode');

    try {
      const verifyResponse = await instance.post('/auth/verify', {
        email,
        verificationCode: emailCode,
      });

      if (verifyResponse.status === 200) {
        setIsCodeVerified(true);
        alert('이메일 인증이 완료되었습니다.');
      } else {
        setError('emailCode', {
          message: '입력한 인증번호가 올바르지 않습니다.',
        });
      }
    } catch (error) {
      setError('emailCode', {
        message: '인증번호 확인 중 오류가 발생했습니다.',
      });
    }
  };

  const onSubmit = async (data: SignupRequest) => {
    console.log(data);
  };

  const passwordErrorMessage =
    '영문, 숫자, 특수문자(@, !)를 포함하여 8~16자로 입력해주세요.';

  return (
    <div className='mt-6 flex flex-col items-center gap-y-6'>
      <form
        className='flex w-[250px] flex-col gap-2'
        onSubmit={handleSubmit(onSubmit)}
        noValidate // 기본 HTML5 검증 메세지 제거
      >
        <Input
          placeholder='이름'
          aria-invalid={
            isSubmitted ? (errors.name ? 'true' : 'false') : undefined
          }
          {...register('name', {
            required: '이름을 입력해주세요.',
          })}
        />
        <ErrorMessage
          errors={errors}
          name='name'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />

        <Input
          type='email'
          placeholder='이메일'
          aria-invalid={
            isSubmitted ? (errors.email ? 'true' : 'false') : undefined
          }
          disabled={isCodeSent}
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
              onClick={handleEmailVerification}
              // FIXME) 이메일 유효성 검사 통과해야만 버튼 활성화
              // FIXME) 인증 버튼 눌렀을 때 폼 전체 입력 필드 유효성 검사 실행되지 않도록 수정
              disabled={isEmailChecked || isChecking}
            >
              {!isCodeSent ? '인증' : <IoMdCheckmarkCircle />}
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

        <Input
          placeholder='이메일 인증번호'
          aria-invalid={
            isSubmitted ? (errors.emailCode ? 'true' : 'false') : undefined
          }
          disabled={isCodeVerified}
          {...register('emailCode', {
            required:
              '메일로 전송된 인증번호를 입력하고 확인 버튼을 눌러주세요.',
          })}
          iconPosition='right'
          icon={
            <Button
              variant='outline'
              className='w-auto'
              onClick={handleEmailCodeVerification}
              disabled={!isCodeSent || isCodeVerified}
            >
              {!isCodeVerified ? '확인' : <IoMdCheckmarkCircle />}
            </Button>
          }
        />
        <ErrorMessage
          errors={errors}
          name='emailCode'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />

        <Input
          type='password'
          placeholder='비밀번호'
          aria-invalid={
            isSubmitted ? (errors.password ? 'true' : 'false') : undefined
          }
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: passwordErrorMessage,
            },
            maxLength: {
              value: 16,
              message: passwordErrorMessage,
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!])[a-zA-Z\d@!]{8,16}$/,
              message: passwordErrorMessage,
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name='password'
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
              ? errors.confirmPassword
                ? 'true'
                : 'false'
              : undefined
          }
          {...register('confirmPassword', {
            required: true,
            validate: (value, formValues) => {
              return (
                value === formValues.password || '비밀번호가 일치하지 않습니다.'
              );
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name='confirmPassword'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />

        <Button type='submit' disabled={isSubmitting || !isCodeVerified}>
          회원가입
        </Button>
      </form>

      <AuthNavLinks
        leftText='로그인하기'
        rightText='비밀번호 찾기'
        leftPath={paths.auth.login.fullPath}
        rightPath={paths.auth.findPassword.fullPath}
      />
    </div>
  );
};

export default AuthSignupPage;
