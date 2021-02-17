module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'react-app'],
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    'no-trailing-spaces': 'error',
    'spaced-comment': ['error', 'always'],
  },
}
