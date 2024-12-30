import antfu from '@antfu/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default antfu({
  type: 'app',
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
}, {
  rules: {
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
}, {
  files: ['**/*.test.ts'],
  rules: {
    'test/prefer-lowercase-title': 'off',
  },
});
