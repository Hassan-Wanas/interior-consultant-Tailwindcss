/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './main.js'
  ],
  theme: {
    extend: {
      colors: {
        Black1: '#181719',
        Gray3: '#828282',
        Gray6: '#F2F2F2',
        White1: '#A9A9A9'
      }
    },
    fontFamily: {
      Montserrat: 'Montserrat',
      CrimsonPro: 'Crimson Pro',
      Lora: 'Lora',
    }
  },
  plugins: [],
}
