import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { paths } from '@/routers/paths';
import ButtonComponent from '@/components/Button';
import InputComponent from '@/components/Input';
import AuthNavLinks from '@/components/AuthNavLinks';
import NaverIcon from '@/assets/btn_naver.svg?react';
import KakaoIcon from '@/assets/btn_kakao.svg?react';
import GoogleIcon from '@/assets/btn_google.svg?react';
import { login } from '@/apis/authApi';

const socialLoginIcons = [
  { Component: NaverIcon, alt: '네이버 로그인' },
  { Component: KakaoIcon, alt: '카카오 로그인' },
  { Component: GoogleIcon, alt: '구글 로그인' },
];

const AuthLoginPage = () => {
  // TODO) react-hook-form 적용하고 useState 제거
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='mt-6 flex flex-col items-center gap-y-6'>
      {/* TODO) react-hook-form 적용 */}
      <form
        className='flex w-[250px] flex-col gap-2'
        onSubmit={(e) => {
          e.preventDefault();
          login(e, email, password);
        }}
      >
        <InputComponent
          type='email'
          placeholder='이메일'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputComponent
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='my-2 flex items-center gap-2'>
          <Checkbox id='rememberId' />
          <label
            htmlFor='rememberId'
            className='text-xs font-medium leading-none text-text-sub peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            이메일 저장
          </label>
        </div>

        <ButtonComponent type='submit'>로그인</ButtonComponent>
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
