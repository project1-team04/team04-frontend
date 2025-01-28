import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '@/apis/authApi';
import { paths } from '@/routers/paths';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { Checkbox } from '@/components/ui/checkbox';
import AuthNavLinks from '@/components/AuthNavLinks';
import NaverIcon from '@/assets/btn_naver.svg?react';
import KakaoIcon from '@/assets/btn_kakao.svg?react';
import GoogleIcon from '@/assets/btn_google.svg?react';

type LoginFormInputs = {
  email: string;
  password: string;
};

const socialLoginIcons = [
  { Component: NaverIcon, alt: '네이버 로그인' },
  { Component: KakaoIcon, alt: '카카오 로그인' },
  { Component: GoogleIcon, alt: '구글 로그인' },
];

const AuthLoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<LoginFormInputs>();

  // FIXME) 토큰 유무에 따른 라우팅 로직 추가 후 navigate 관련 로직 삭제
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    if (isSubmitting) return;

    try {
      const response = await login(data.email, data.password);

      if (response.success) {
        navigate(paths.projects.root);
      } else {
        setError('root', { message: response.message });
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      setError('root', {
        message: '로그인 중 예상치 못한 오류가 발생했습니다.',
      });
    }
  };

  const passwordErrorMessage = '비밀번호 형식에 맞지 않습니다.';

  return (
    <div className='mt-6 flex flex-col items-center gap-y-6'>
      <form
        className='flex w-[250px] flex-col gap-2'
        onSubmit={handleSubmit(onSubmit)}
        noValidate // 기본 HTML5 검증 메세지 제거
      >
        <Input
          type='email'
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
        />
        {errors.email && (
          <small role='alert' className='text-text-error'>
            {String(errors.email.message)}
          </small>
        )}
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
        {errors.password && (
          <small role='alert' className='text-text-error'>
            {String(errors.password.message)}
          </small>
        )}

        {/* TODO: '이메일 저장' 체크 후 로그인하면, 로그아웃 시 최근 로그인한 이메일이 자동 입력되도록 구현 */}
        <div className='my-2 flex items-center gap-2'>
          <Checkbox id='rememberId' />
          <label
            htmlFor='rememberId'
            className='text-xs font-medium leading-none text-text-sub peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            이메일 저장
          </label>
        </div>

        {errors.root && (
          <small role='alert' className='text-text-error'>
            {String(errors.root.message)}
          </small>
        )}

        <Button type='submit' disabled={isSubmitting}>
          로그인
        </Button>
      </form>

      <div className='flex w-full items-center text-xs text-text-disabled before:me-6 before:flex-1 before:border-t before:border-border-default after:ms-6 after:flex-1 after:border-t after:border-border-default'>
        OR
      </div>

      <div className='flex items-center gap-4'>
        {socialLoginIcons.map(({ Component, alt }) => (
          <Component key={alt} className='size-8' aria-label={alt} />
        ))}
      </div>

      <AuthNavLinks
        leftText='회원가입하기'
        rightText='비밀번호 찾기'
        leftPath={paths.auth.signup.fullPath}
        rightPath={paths.auth.findPassword.fullPath}
      />
    </div>
  );
};

export default AuthLoginPage;
