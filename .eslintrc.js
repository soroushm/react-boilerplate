module.exports = {
  parser: 'babel-eslint',
  globals: {
    document: 'writable',
    URL: 'writable'
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'react-hooks'],

  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react', 'prettier/standard'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.0'
    }
  },
  rules: {
    // overrides
    'no-case-declarations': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true
      }
    ],
    'no-console': 0,
    propWrapperFunctions: ['forbidExtraProps']
    // The names of any functions used to wrap the
    // propTypes object, e.g. `forbidExtraProps`.
    // If this isn't set, any propTypes wrapped in
    // a function will be skipped.
  }
}
