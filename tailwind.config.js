/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // pretendard
      },
    },

    // team04-frontend Wiki '디자인 시스템' 문서에서 용도 확인 가능
    colors: {
      white: '#FFFFFF',
      purple: '#6224FD',
      purple_hover: '#411F97',
      purple_disabled: '#C6BBE1',
      orange: '#FFA500',
      green: '#8BC48A',
      red: '#FF0101',
      gray: '#EFEFEF',

      text_default: '#232527',
      text_sub: '#444444',
      text_disabled: '#A0A0A0',
      text_success: '#2768FF',
      text_error: '#FF0101',

      border_defalut: '#BFBFBF',

      divider_default: '#E2E2E2',

      Bg_default: '#FFFFFF',
      Bg_light: '#F5F5F5',
      Bg_deep: '#EFEFEF',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
