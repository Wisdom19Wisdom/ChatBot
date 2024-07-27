/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'main': '#5EC401'
        },
        transitionDuration: {
          '400': '400ms',
        },
        screens: {
          'xs': '315px', 
        },
      },
    },
    plugins: [],
  }
  
  