import type { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './template-base.js';

/**
 * Generates an ESLint configuration for TypeScript files.
 *
 * The configuration includes:
 * - Base configuration from `baseConfig`.
 * - Import sorting and organization rules.
 * - TypeScript-specific linting rules for type safety and code quality.
 * - Prettier integration for code formatting.
 * - Restriction on the use of certain TypeScript features like enums.
 *
 * @param plugin - The ESLint plugin to be used.
 * @param parser - The ESLint parser to be used.
 * @returns The TS ESLint configuration.
 */
export default (
  plugin: TSESLint.FlatConfig.Plugin,
  parser: TSESLint.FlatConfig.Parser,
): TSESLint.FlatConfig.ConfigArray => [
  baseConfig(plugin, parser),
  {
    name: '@anedomansky/eslint-config/ts',
    rules: {
      '@typescript-eslint/array-type': ['warn'],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/consistent-type-assertions': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
      ],
      '@typescript-eslint/no-base-to-string': 'warn',
      '@typescript-eslint/no-confusing-void-expression': 'warn',
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-extraneous-class': [
        'error',
        { allowWithDecorator: true },
      ],
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-shadow': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unnecessary-type-parameters': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/prefer-promise-reject-errors': 'warn',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/restrict-plus-operands': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
      'array-callback-return': 'error',
      complexity: ['error', 20],
      curly: 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'lines-between-class-members': ['warn', 'always'],
      'max-classes-per-file': ['error', 1],
      'max-len': [
        'warn',
        {
          code: 120,
          comments: 160,
        },
      ],
      'max-lines': ['error', 400],
      'no-bitwise': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'error',
      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],
      'no-eval': 'error',
      'no-implicit-coercion': 'error',
      'no-implied-eval': 'error',
      'no-lonely-if': 'error',
      'no-new-wrappers': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message:
            'Do not use enum at all. See: https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls',
        },
      ],
      'no-shadow': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-concat': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-promise-reject-errors': 'off',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-await': 'off',
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
  },
];
