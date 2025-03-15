/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', // Adjust the paths to match your project structure
    './src/**/*.{js,jsx,ts,tsx}', // Include other relevant directories
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "1024px",
        lg: "1440px",
        xl: "1920px",
        xxl: "2560px",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        scaleUp: 'scaleUp 0.3s ease-in-out',
        scaleDown: 'scaleDown 0.3s ease-in-out',
        slideInFromRightAndFadeIn: 'slideInFromRightAndFadeIn 0.5s ease-in-out',
        slideInFromLeftAndFadeIn: 'slideInFromLeftAndFadeIn 0.5s ease-in-out',

      },
      colors: {
        dark: '#060708',
        darkGrey: '#181818',
        lightGrey: '#e5e5e5',
        white: '#ffffff',
        mediumGrey: '#b3b3b3',
        black: '#000000',
        testRed: '#ff0000',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.75 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' },
        },
        slideInFromRightAndFadeIn: {
          '0%': { transform: 'translateX(25%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInFromLeftAndFadeIn: {
          '0%': { transform: 'translateX(-25%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

