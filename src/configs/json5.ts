import json from '@eslint/json';
import type { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './template-base.js';

/**
 * Generates an ESLint configuration for JSON5 files.
 *
 * The configuration includes:
 * - Base configuration from `baseConfig`.
 * - Custom rules
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
    name: '@anedomansky/eslint-config/json5',
    language: 'json/json5',
    ...json.configs.recommended,
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: false,
          useTabs: false,
          tabWidth: 2,
          semi: true,
          bracketSpacing: true,
          endOfLine: 'auto',
          parser: 'json5',
        },
      ],
    },
  },
];
