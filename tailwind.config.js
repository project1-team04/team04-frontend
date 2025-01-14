/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // pretendard
      },
    },
    colors: {
      white: '#FFFFFF',
      purple: '#6224FD',
      purple_hover: '#411F97',
      purple_disabled: '#C6BBE1',
      orange: '#FFA500',
      green: '#8BC48A',
      red: '#FF0101',
      gray: '#EFEFEF',

      text_default: '#232527', // #000000 대신 사용
      text_sub: '#444444',
      text_disabled: '#A0A0A0', // input의 placeholder 등에 사용
      text_success: '#2768FF', // 파랑
      text_error: '#FF0101', // 빨강

      border_defalut: '#BFBFBF',

      divider_default: '#E2E2E2',

      Bg_default: '#FFFFFF',
      Bg_light: '#F5F5F5', // 칸반보드 배경에 사용
      Bg_deep: '#EFEFEF', // 이슈 description, trouble shooting, 상대 채팅 배경, 프로젝트 설정 등에 쓰이는 회색
    },
  },
  plugins: [require('tailwindcss-animate')],
};
