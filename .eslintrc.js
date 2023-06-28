module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
  plugins: ['eslint-plugin-simple-import-sort', '@typescript-eslint', 'react'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'import/no-extraneous-dependencies': ['warn', {
      devDependencies: true,
    }],
    'import/no-import-module-exports': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'react/function-component-definition': 'off',
    'max-len': ['error', { code: 120, ignoreComments: true }],
  },
};
