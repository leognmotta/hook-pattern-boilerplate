module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    indent: ['warn', 2],
    'function-paren-newline': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      80,
      2,
      {
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreUrls: true,
      },
    ],
  },
  env: {
    browser: true,
  },
  plugins: ['react', 'prettier', 'jsx-a11y', 'import', 'react-hooks'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  overrides: [
    {
      files: ['src/**/*.test.js', 'src/**/*.test.jsx', '__mocks__/**/*.js'],
      rules: {
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 0,
        'import/no-extraneous-dependencies': 'off',
        'global-require': 'off',
      },

      env: {
        browser: false,
        jest: true,
      },
    },
  ],
};
