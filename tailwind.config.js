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
      },
    },
  },
  plugins: [],
}

