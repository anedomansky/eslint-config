import type { TSESLint } from '@typescript-eslint/utils';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

import { an } from './index.js';

/**
 * This is the JSON/JSONC/JSON5 ESLint configuration that includes all recommended rules and plugins.
 */
export const anStandardJSON: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  {
    ignores: [
      '**/dist/**/*',
      '**/coverage/**/*',
      '**/jest-reports/**/*',
      '**/report/**/*',
      '**/test-results/**/*',
      '**/node_modules/**/*',
      '**/src/gen/**/*',
    ],
  },
  {
    ...prettierRecommended,
    name: '@anedomansky/eslint-config/prettier/json',
    files: [
      '**/*.json',
      '**/*.jsonc',
      '.vscode/*.json',
      '**/*.code-workspace',
      '**/*.json5',
    ],
    ignores: ['package-lock.json'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: false,
          useTabs: false,
          tabWidth: 2,
          bracketSpacing: true,
          endOfLine: 'auto',
          parser: 'json',
        },
      ],
    },
  },
  ...an.configs.json,
  ...an.configs.jsonc,
  ...an.configs.json5,
);
