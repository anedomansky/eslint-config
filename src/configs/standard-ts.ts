import eslint from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import type { Linter, Rule } from 'eslint';
import compat from 'eslint-plugin-compat';
import * as importPlugin from 'eslint-plugin-import';
import playwright from 'eslint-plugin-playwright';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

import { an } from './index.js';

type PlaywrightPlugin = {
  configs: {
    'flat/recommended': Linter.Config;
    'playwright-test': Linter.Config;
    recommended: Linter.Config;
  };
  rules: Record<string, Rule.RuleModule>;
};

const playwrightPlugin: PlaywrightPlugin =
  playwright as unknown as PlaywrightPlugin;

/**
 * This is the Typescript ESlint configuration that includes all recommended rules and plugins.
 */
export const anStandardTS: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  {
    ignores: [
      '**/dist/**/*',
      '**/coverage/**/*',
      '**/jest-reports/**/*',
      '**/report/**/*',
      '**/test-results/**/*',
      '**/node_modules/**/*',
      '**/src/gen/**/*',
      '**/*.d.ts',
      '**/*.js',
      '**/*.mjs',
      '**/*.json',
    ],
  },
  {
    files: ['**/*.e2e.spec.ts', '**/*.e2e.test.ts'],
    ...playwrightPlugin.configs['flat/recommended'],
    extends: [...an.configs.ui],
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    extends: [...an.configs.unitTestingLibrary, ...an.configs.unitJest],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...an.configs.ts,
      compat.configs['flat/recommended'],
      importPlugin.flatConfigs.recommended,
      prettierRecommended,
    ],
  },
);
