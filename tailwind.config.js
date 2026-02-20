/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E0F12',
        surface: '#17181C',
        divider: '#24262B',
        primary: '#FFFFFF',
        secondary: '#8B8F98',
        accent: '#4D7CFE', // Electric Blue
        lime: '#B4F000',   // Lime Green
      },
    },
  },
  plugins: [],
}