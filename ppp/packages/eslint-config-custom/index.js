module.exports = {
  extends: [
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
  ],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "react/jsx-key": "error",
    "linebreak-style": ["error", "unix"],
    "no-console": "error",
    "@typescript-eslint/no-explicit-any": "error",
    quotes: ["warn", "double"],
    semi: ["warn", "never"],
  },
}
