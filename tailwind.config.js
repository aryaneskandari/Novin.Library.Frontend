/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/*.{html,ts}')],
  theme: {
    extend: {
      colors:{
      },
      fontFamily:{
        'sidebarfont':'PeydaSemiBold'
      },
      fontFamily:{
        'account':'YekanBR'
      }
    },
  },
  plugins: [],
}

