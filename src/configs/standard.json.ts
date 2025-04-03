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
    files: ['**/*.json'],
    extends: [...an.configs.json, prettierRecommended],
  },
  {
    files: ['**/*.jsonc', '.vscode/*.json', '**/*.code-workspace'],
    extends: [...an.configs.jsonc, prettierRecommended],
  },
  {
    files: ['**/*.json5'],
    extends: [...an.configs.json5, prettierRecommended],
  },
);
