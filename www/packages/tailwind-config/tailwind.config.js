const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    // web content
    "src/**/*.{js,ts,jsx,tsx, mdx}",

    // play content
    "pages/**/*.{js,ts,jsx,tsx, mdx}",

    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandmain: colors.orange[500],
        brandaccent: colors.yellow[500],
      },
      screens: {
        xs: "384px",
        "2xs": "512px",
      },
    },
  },
  plugins: [],
}
