import { Separator } from '@/components/ui/separator';
import ButtonComponent from '@/components/Button';
import InputComponent from '@/components/Input';

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
    <InputComponent type={type} placeholder={placeholder} />
    <ButtonComponent variant='outline' className='w-auto'>
      {buttonLabel}
    </ButtonComponent>
  </div>
);

const AuthSignupPage = () => {
  return (
    <div className='mt-6 flex flex-col items-center gap-y-6'>
      <form className='flex w-[250px] flex-col gap-2'>
        <InputComponent placeholder='이름' />
        <InputWithButton type='email' placeholder='이메일' buttonLabel='인증' />
        <InputWithButton placeholder='이메일 인증번호' buttonLabel='확인' />
        <InputComponent type='password' placeholder='비밀번호' />
        <InputComponent type='password' placeholder='비밀번호 확인' />
        <ButtonComponent>회원가입</ButtonComponent>
      </form>

      <div className='flex h-4 items-center gap-4 text-xs text-text-disabled'>
        <p className='hover:text-text-sub'>로그인하기</p>
        <Separator orientation='vertical' />
        <p className='hover:text-text-sub'>비밀번호찾기</p>
      </div>
    </div>
  );
};

export default AuthSignupPage;
