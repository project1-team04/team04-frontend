/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    // team04-frontend Wiki '디자인 시스템' 문서에서 용도 확인 가능
    colors: {
      purple: {
        DEFAULT: '#6224FD',
        hover: '#4903FB',
      },
      gray: {
        DEFAULT: '#EFEFEF',
        hover: '#D7D7D7',
      },
      white: '#FFFFFF',
      orange: '#FFA500',
      green: '#8BC48A',
      red: {
        DEFAULT: '#FF0101',
        hover: '#c10505',
      },

      text: {
        DEFAULT: '#232527',
        sub: '#444444',
        disabled: '#A0A0A0',
        success: '#2768FF',
        error: '#FF0101',
      },

      bg: {
        DEFAULT: '#FFFFFF',
        light: '#F5F5F5',
        deep: '#EFEFEF',
      },

      'border-default': '#BFBFBF',
      'divider-default': '#E2E2E2',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
