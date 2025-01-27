import { paths } from '@/routers/paths';
import Button from '@/components/Button';
import Input from '@/components/Input';
import AuthNavLinks from '@/components/AuthNavLinks';

const InputWithButton = ({
  placeholder,
  type = 'text',
  buttonLabel,
}: {
  placeholder: string;
  type?: string;
  buttonLabel: string;
}) => (
  <div className='flex gap-1'>
    <Input type={type} placeholder={placeholder} />
    <Button variant='outline' className='w-auto'>
      {buttonLabel}
    </Button>
  </div>
);

const AuthSignupPage = () => {
  return (
    <div className='mt-6 flex flex-col items-center gap-y-6'>
      <form className='flex w-[250px] flex-col gap-2'>
        <Input placeholder='이름' />
        <InputWithButton type='email' placeholder='이메일' buttonLabel='인증' />
        <InputWithButton placeholder='이메일 인증번호' buttonLabel='확인' />
        <Input type='password' placeholder='비밀번호' />
        <Input type='password' placeholder='비밀번호 확인' />
        <Button>회원가입</Button>
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
