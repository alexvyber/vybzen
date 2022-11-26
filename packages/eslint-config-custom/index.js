module.exports = {
  extends: [
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",

    // "prettier",
  ],
  rules: {
    // "@next/next/no-html-link-for-pages": "off",
    // "react/jsx-key": "off",
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    "no-console": 0,
    "@typescript-eslint/no-explicit-any": "error",

    quotes: ["warn", "double"],
    semi: ["error", "always"],
  },
};
