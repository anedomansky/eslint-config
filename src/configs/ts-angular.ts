import type { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './ts-base.js';

/**
 * Generates an ESLint configuration for Angular-HTML templates.
 *
 * The configuration includes:
 * - Base configuration from `baseConfig`.
 * - Custom rules for Angular templates
 * - Prettier integration for code formatting.
 *
 * @param plugin - The ESLint plugin to be used.
 * @param parser - The ESLint parser to be used.
 *
 * @returns The HTML ESLint configuration.
 */
export default (
  plugin: TSESLint.FlatConfig.Plugin,
  parser: TSESLint.FlatConfig.Parser,
): TSESLint.FlatConfig.ConfigArray => [
  baseConfig(plugin, parser),
  {
    name: '@anedomansky/eslint-config/ts-angular',
    rules: {
      '@angular-eslint/no-empty-lifecycle-method': 'warn',
      '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
      '@angular-eslint/prefer-output-readonly': 'warn',
      '@angular-eslint/prefer-signals': 'warn',
      '@angular-eslint/prefer-standalone': 'warn',
    },
  },
];
