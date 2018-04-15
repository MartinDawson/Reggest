module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb'],
  rules: {
    'react/wrap-multilines': 'off',
    'react/require-extension': 'off',
    'relay/graphql-syntax': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  },
  overrides: [
    {
      files: [
        '**/actions.js'
      ],
      rules: {
        'import/prefer-default-export': 'off'
      }
    }
  ],
  plugins: [
    'react',
    'relay',
  ]
}
