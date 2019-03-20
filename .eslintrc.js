module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
    'prettier',
    'promise',
    '@typescript-eslint',
  ],
  rules: {
    strict: 0,
    'object-curly-newline': 0,
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        'selector': 'ForInStatement',
        'message': 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        'selector': 'LabeledStatement',
        'message': 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        'selector': 'WithStatement',
        'message': '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        'paths': [{
          'name': 'styled-components',
          'message': 'Please import from styled-components/macro.'
        }],
        'patterns': [
          '!styled-components/macro'
        ]
      }
    ],
    'default-case': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-case-declarations': 'off',
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
  },
};
