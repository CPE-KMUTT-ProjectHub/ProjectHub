module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-console': 'warn',
    'no-lonely-if': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-useless-return': 'error',
    'no-warning-comments': 'warn',
    'require-await': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
