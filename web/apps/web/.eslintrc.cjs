module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  extends: ["custom", "next", "next/core-web-vitals"],
}
