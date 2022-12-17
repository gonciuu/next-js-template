/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fcf3e0',
          100: '#f9ebcc',
          200: '#f3d494',
          300: '#edb95c',
          400: '#e8a237',
          500: '#e08220',
          600: '#c66119',
          700: '#a54418',
          800: '#86361a',
          900: '#6f2d18',
        },
        secondary: {
          50: '#eaebeb',
          100: '#d5d6d8',
          200: '#abadb1',
          300: '#818589',
          400: '#575c62',
          500: '#2d333b',
          600: '#24292f',
          700: '#1b1f23',
          800: '#121418',
          900: '#090a0c',
        },
      },
    },
  },
  plugins: [],
}
