/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },

    // team04-frontend Wiki '디자인 시스템' 문서에서 용도 확인 가능
    colors: {
      white: '#FFFFFF',
      purple: {
        DEFAULT: '#6224FD',
        hover: '#411F97',
        disabled: '#C6BBE1',
      },
      orange: '#FFA500',
      green: '#8BC48A',
      red: '#FF0101',
      gray: '#EFEFEF',

      text: {
        DEFAULT: '#232527',
        sub: '#444444',
        disabled: '#A0A0A0',
        success: '#2768FF',
        error: '#FF0101',
      },

      border_defalut: '#BFBFBF',

      divider_default: '#E2E2E2',

      bg: {
        DEFAULT: '#FFFFFF',
        light: '#F5F5F5',
        deep: '#EFEFEF',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
