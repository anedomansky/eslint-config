import type { TSESLint } from '@typescript-eslint/utils';
import json from '@eslint/json';

/**
 * Generates an ESLint configuration for JSONC files.
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
    name: '@anedomansky/eslint-config/jsonc',
    files: ['**/*.jsonc', '.vscode/*.json', '**/*.code-workspace'],
    language: 'json/jsonc',
  },
];
