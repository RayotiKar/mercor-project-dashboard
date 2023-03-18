/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-1' : '#D0D1D2',
        'grey-2' : '#F8F9FE',
        'violet-d' : '#422F8A',
        'violet-l' : '#F2F2F7',
      },
    },
  },
  plugins: [],
}
