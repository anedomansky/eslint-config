import json from '@eslint/json';
import type { TSESLint } from '@typescript-eslint/utils';

/**
 * Generates an ESLint configuration for JSON5 files.
 *
 * The configuration includes:
 * - Base configuration from `baseConfig`.
 * - Custom rules
 *
 * @returns The HTML ESLint configuration.
 */
export default (): TSESLint.FlatConfig.ConfigArray => [
  {
    ...json.configs.recommended,
    name: '@anedomansky/eslint-config/json5',
    files: ['**/*.json5'],
    language: 'json/json5',
  },
];
