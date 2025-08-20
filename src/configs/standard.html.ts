import type { TSESLint } from '@typescript-eslint/utils';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

import { an } from './index.js';

/**
 * This is the HTML ESLint configuration that includes all recommended rules and plugins.
 */
export const anStandardHTML: TSESLint.FlatConfig.ConfigArray = tseslint.config(
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
    files: ['**/*.html'],
    extends: [...an.configs.html, eslintConfigPrettier],
  },
);
