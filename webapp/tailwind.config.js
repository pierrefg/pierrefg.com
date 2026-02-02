/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'rgb(var(--foreground-rgb))',
        primary: {
          DEFAULT: 'rgb(var(--primary-color-rgb))',
          hover: 'rgb(var(--primary-hover-color-rgb))',
          muted: 'rgb(var(--primary-muted-color-rgb))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-color-rgb))',
          hover: 'rgb(var(--secondary-hover-color-rgb))',
          muted: 'rgb(var(--secondary-muted-color-rgb))',
        },
      },
      fontFamily: {
        josefin: ['var(--font-josefin)'],
        mona: ['var(--font-mona)'],
      },
      fontSize: {
        base: '14px',
        lg: '17px',
      },
      height: {
        'primary-menu': 'var(--primary-menu-height)',
        'secondary-menu': 'var(--secondary-menu-height)',
        'secondary-menu-mobile': 'var(--secondary-menu-mobile-height)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideIn: {
          '0%': { transform: 'translate(-10px)', opacity: '0' },
          '100%': { transform: 'translate(0px)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        rotate: 'rotate 20s linear infinite',
        slideIn: 'slideIn 1s ease-in-out'
      },
    },
  },
  plugins: [],
};