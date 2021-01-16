module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:node/recommended', 'plugin:prettier/recommended', 'google'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'require-jsdoc': 'off',
  },
};
