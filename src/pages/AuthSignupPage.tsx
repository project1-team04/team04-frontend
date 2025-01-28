import { useForm } from 'react-hook-form';
import { paths } from '@/routers/paths';
import Button from '@/components/Button';
import Input from '@/components/Input';
import AuthNavLinks from '@/components/AuthNavLinks';

type SignupFormInputs = {
  name: string;
  email: string;
  emailCode: string;
  password: string;
  confirmPassword: string;
};

const AuthSignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<SignupFormInputs>();

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
  };

  const passwordErrorMessage =
    '비밀번호는 8~16자 길이로, 영문 대소문자, 숫자, 특수문자(@, !)를 각각 최소 1개 이상 포함해야 합니다.';

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
        {errors.name && (
          <small role='alert' className='text-text-error'>
            {String(errors.name.message)}
          </small>
        )}

        {/* TODO) '인증' 버튼 눌렀는지 확인, 버튼 클릭 여부에 따라 label 다르게 표시 */}
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
          iconPosition='right'
          icon={
            <Button variant='outline' className='w-auto'>
              인증
            </Button>
          }
        />
        {errors.email && (
          <small role='alert' className='text-text-error'>
            {String(errors.email.message)}
          </small>
        )}

        {/* TODO) '확인' 버튼 눌렀는지 확인 */}
        <Input
          placeholder='이메일 인증번호'
          aria-invalid={
            isSubmitted ? (errors.emailCode ? 'true' : 'false') : undefined
          }
          {...register('emailCode', {
            required:
              '메일로 전송된 인증번호를 입력하고 확인 버튼을 눌러주세요.',
          })}
          iconPosition='right'
          icon={
            <Button variant='outline' className='w-auto'>
              확인
            </Button>
          }
        />
        {errors.emailCode && (
          <small role='alert' className='text-text-error'>
            {String(errors.emailCode.message)}
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

        {/* TODO) password의 입력값과 같은지 확인 */}
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
            required: '비밀번호를 입력해주세요.',
          })}
        />
        {errors.confirmPassword && (
          <small role='alert' className='text-text-error'>
            {String(errors.confirmPassword.message)}
          </small>
        )}

        <Button type='submit' disabled={isSubmitting}>
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
