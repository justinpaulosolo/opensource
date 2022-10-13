/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f1f5fc',
          100: '#e5eefa',
          200: '#cfdff6',
          300: '#b2c9ef',
          400: '#93ace6',
          500: '#7289da',
          600: '#5e6ecd',
          700: '#4e5ab4',
          800: '#414c92',
          900: '#3a4375',
        },
        gray: {
          0: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
};
