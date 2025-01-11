/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      spacing: {
        '10': '10px',
        '18': '18px',
        '26': '26px',
        '82': '82px',
      },
      padding: {
        '37': '37px',
        '40': '40px',
      },
      zIndex: {
        '10': '10',
        '1': '1',
      },
    },
  },
  plugins: [],
}
