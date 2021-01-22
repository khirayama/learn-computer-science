module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:node/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'require-jsdoc': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
