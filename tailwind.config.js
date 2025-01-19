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
        '1/6': '16.666667%',
        '2/5': '40%',
        '2/7': '28.571429%',
        '32': '32%',
      },
      padding: {
        '37': '37px',
        '40': '40px',
      },
      zIndex: {
        '10': '10',
        '1': '1',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      textOrientation: {
        'upright': 'upright',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical-rl': { 'writing-mode': 'vertical-rl' },
        '.text-upright': { 'text-orientation': 'upright' },
      });
    },
  ],
}
