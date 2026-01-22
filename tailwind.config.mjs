/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#050505',
          800: '#111111',
          700: '#1d1d1d',
        },
        brand: {
          teal: '#00f2ea',
          orange: '#ffb347',
        },
      },
    },
  },
  plugins: [],
};