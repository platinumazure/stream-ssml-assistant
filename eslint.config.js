import antfu from '@antfu/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default antfu({
  type: 'app',
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
});
