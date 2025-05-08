import type { TSESLint } from '@typescript-eslint/utils';
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
  ...an.configs.json,
  ...an.configs.jsonc,
  ...an.configs.json5,
);
