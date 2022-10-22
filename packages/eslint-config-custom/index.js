module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "turbo",
    "prettier",
  ],
  rules: {
    // "@next/next/no-html-link-for-pages": "off",
    // "react/jsx-key": "off",
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    "no-console": 0,
    quotes: ["warn", "double"],
    // semi: ["error", "always"]
  },
}
