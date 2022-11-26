module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  bracketSameLine: false,
  arrowParens: "avoid",
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-tailwindcss"), // MUST BE LAST
  ],
}
