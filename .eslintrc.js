module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true
  },

  globals: {
    $fetch: true
  },

  extends: ["@nuxt/eslint-config"],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },

  rules: {}
};
