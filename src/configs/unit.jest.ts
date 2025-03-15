import type { TSESLint } from '@typescript-eslint/utils';
import jest from 'eslint-plugin-jest';

import baseConfig from './base.js';

/**
 * Generates a Jest-specific ESLint configuration for unit tests.
 *
 * The configuration includes:
 * - Base configuration from `baseConfig`.
 * - Ignoring of ui test files.
 * - Jest recommended rules with an additional rule to enforce the use of `expect` and `screen.findBy*` in test assertions.
 *
 * @param plugin - The ESLint plugin to be used.
 * @param parser - The ESLint parser to be used.
 * @returns An array of ESLint configurations tailored for unit testing with Jest.
 */
export default (
  plugin: TSESLint.FlatConfig.Plugin,
  parser: TSESLint.FlatConfig.Parser,
): TSESLint.FlatConfig.ConfigArray => [
  baseConfig(plugin, parser),
  {
    name: '@anedomansky/eslint-config/unit/jest',
    ignores: ['**/*.e2e.spec.ts', '**/*.e2e.test.ts'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/expect-expect': [
        'error',
        {
          additionalTestBlockFunctions: [],
          assertFunctionNames: [
            'expect',
            'screen.findAllBy*',
            'screen.findBy*',
          ],
        },
      ],
    },
  },
];
