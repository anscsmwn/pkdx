/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onyx: '#0F0F0F',
        night: '#0D0F12',
        'baltic-sea': '#272727',
        'rangoon-green': '#19191B',
      },
    },
  },
  plugins: [],
};
