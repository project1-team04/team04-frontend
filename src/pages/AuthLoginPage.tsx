import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import ButtonComponent from '@/components/Button';
import InputComponent from '@/components/Input';
import NaverIcon from '../assets/btn_naver.svg?react';
import KakaoIcon from '../assets/btn_kakao.svg?react';
import GoogleIcon from '../assets/btn_google.svg?react';

const socialLoginIcons = [
  { Component: NaverIcon, alt: '네이버 로그인' },
  { Component: KakaoIcon, alt: '카카오 로그인' },
  { Component: GoogleIcon, alt: '구글 로그인' },
];

const AuthLoginPage = () => {
  return (
    <div className='mt-6 flex flex-col items-center gap-y-6'>
      <form className='flex w-[250px] flex-col gap-2'>
        <InputComponent type='email' placeholder='이메일' />
        <InputComponent type='password' placeholder='비밀번호' />

        <div className='my-2 flex items-center gap-2'>
          <Checkbox id='rememberId' />
          <label
            htmlFor='rememberId'
            className='text-xs font-medium leading-none text-text-sub peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            이메일 저장
          </label>
        </div>

        <ButtonComponent>로그인</ButtonComponent>
      </form>

      <div className='flex w-full items-center text-xs text-text-disabled before:me-6 before:flex-1 before:border-t before:border-border-default after:ms-6 after:flex-1 after:border-t after:border-border-default'>
        OR
      </div>

      <div className='flex items-center gap-4'>
        {socialLoginIcons.map(({ Component, alt }) => (
          <Component key={alt} className='size-8' aria-label={alt} />
        ))}
      </div>

      <div className='flex h-4 items-center gap-4 text-xs text-text-disabled'>
        <p className='hover:text-text-sub'>회원가입하기</p>
        <Separator orientation='vertical' />
        <p className='hover:text-text-sub'>비밀번호찾기</p>
      </div>
    </div>
  );
};

export default AuthLoginPage;
