import testingLibrary from 'eslint-plugin-testing-library';
import type { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './template-base.js';

/**
 * Generates a Testing Library-specific ESLint configuration for unit tests.
 *
 * The configuration includes:
 * - A base configuration.
 * - A custom configuration for unit testing with Testing Library, specifically for Angular.
 * - Ignoring of ui test files.
 *
 * @param plugin - The ESLint plugin to be used.
 * @param parser - The ESLint parser to be used.
 * @returns An array of ESLint configurations.
 */
export default (
  plugin: TSESLint.FlatConfig.Plugin,
  parser: TSESLint.FlatConfig.Parser,
): TSESLint.FlatConfig.ConfigArray => [
  baseConfig(plugin, parser),
  {
    name: '@anedomansky/eslint-config/unit/testing-library',
    ignores: ['**/*.e2e.spec.ts', '**/*.e2e.test.ts'],
    ...testingLibrary.configs['flat/angular'],
    ...testingLibrary.configs['flat/dom'],
    ...testingLibrary.configs['flat/marko'],
    ...testingLibrary.configs['flat/react'],
    ...testingLibrary.configs['flat/svelte'],
    ...testingLibrary.configs['flat/vue'],
    rules: {
      'testing-library/no-node-access': 'warn',
      'testing-library/no-render-in-lifecycle': 'off',
    },
  },
];
