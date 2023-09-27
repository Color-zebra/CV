module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
  plugins: ["@html-eslint"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
    },
  ],
  rules: {
    "@html-eslint/indent": ["error", 2],
  },
};
