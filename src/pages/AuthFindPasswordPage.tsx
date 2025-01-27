import { useForm } from 'react-hook-form';
import { paths } from '@/routers/paths';
import Button from '@/components/Button';
import Input from '@/components/Input';
import AuthNavLinks from '@/components/AuthNavLinks';

const AuthForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
            required:
              '먼저 가입된 이메일인지 확인이 필요해요. 확인 버튼을 눌러주세요.',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
          iconPosition='right'
          icon={
            <Button variant='outline' className='w-auto'>
              확인
            </Button>
          }
        />
        {errors.email && (
          <small role='alert' className='text-text-error'>
            {errors.email.message?.toString()}
          </small>
        )}

        <Button type='submit' disabled={isSubmitting}>
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

export default AuthForgotPasswordPage;
