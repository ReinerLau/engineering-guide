/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
};
