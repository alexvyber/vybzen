const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    // web content
    'src/**/*.{js,ts,jsx,tsx}',
    // play content
    'pages/**/*.{js,ts,jsx,tsx}',
    // include packages if not transpiling
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandmain: colors.orange[500],
        brandaccent: colors.yellow[500],
      },
      screens: {
        xs: '384px',
        '2xs': '512px',
      },
    },
  },
  plugins: [],
}
