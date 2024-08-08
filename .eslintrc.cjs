/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: ["@typescript-eslint", "vue"],
};
