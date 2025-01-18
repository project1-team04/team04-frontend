import { paths } from '@/routers/paths';
import ButtonComponent from '@/components/Button';
import InputComponent from '@/components/Input';
import AuthNavLinks from '@/components/AuthNavLinks';

const AuthForgotPasswordPage = () => {
  return (
    <div className='mt-6 flex flex-col items-center gap-y-6'>
      {/* TODO) 폼 제출 후 바로 로그인 페이지로 리다이렉트, 임시 비밀번호로 로그인하면 바로 마이페이지로 리다이렉트 */}
      {/* TODO) 이메일이 등록된 계정인지 확인 후 폼 제출할 수 있게 할 것인지 논의 */}
      <p className='text-sm text-text-sub'>
        가입하신 이메일로 임시 비밀번호를 보내드릴게요.
      </p>
      <form className='flex w-[250px] flex-col gap-2'>
        <InputComponent type='email' placeholder='이메일' />
        <ButtonComponent>임시 비밀번호 전송</ButtonComponent>
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
