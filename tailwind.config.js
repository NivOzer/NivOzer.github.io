/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        romanBeige: '#e5d0b4', // Add your custom color here
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'roman-gradient': 'linear-gradient(to right, #e5d0b4, #f3e5d0)',
        'gold-gradient': 'linear-gradient(to bottom right, #854d0e, #ca8a04, #854d0e)',
      },
      boxShadow: {
        'stitched': '0px 0px 0px 4px white',
      },
    },
    screens: {
      'xs': { 'max': '480px' }, // max-width for smartphones
      'sm': { 'min': '481px', 'max': '768px' }, // min-width and max-width for tablets
      'md': { 'min': '769px', 'max': '1024px' }, // larger tablets to small laptops
      'lg': '1024px', // large screens or laptops
      'xl': '1280px', // extra-large screens
      '2xl': '1536px', // very large screens
    }
  },
  plugins: [],
}

