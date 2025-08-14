import json from '@eslint/json';
import type { TSESLint } from '@typescript-eslint/utils';

/**
 * Generates an ESLint configuration for JSON files.
 *
 * The configuration includes:
 * - Base configuration from `baseConfig`.
 * - Custom rules
 *
 * @returns The HTML ESLint configuration.
 */
export default (): TSESLint.FlatConfig.ConfigArray => [
  {
    name: '@anedomansky/eslint-config/json',
    ...json.configs.recommended,
    files: ['**/*.json'],
    language: 'json/json',
    ignores: ['package-lock.json'],
  },
];
