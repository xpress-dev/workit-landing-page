/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: "'Fraunces 144pt S000', sans-serif",
        sans: "'Manrope', sans-serif",
      },
      backgroundColor: {
        main: '#24053e',
        accent: '#44ffa1',
      },
      borderColor: {
        main: '#24053e',
        accent: '#44ffa1',
      },
      textColor: {
        main: '#24053e',
        accent: '#44ffa1',
      },
    },
  },
  plugins: [],
};
