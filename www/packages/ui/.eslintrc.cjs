module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "no-unused-declaration": false,
  },
}
