import eslint from '@eslint/js';
import ngrx from '@ngrx/eslint-plugin/v9';
import type { TSESLint } from '@typescript-eslint/utils';
import angular from 'angular-eslint';
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
 * This is the Angular ESlint configuration that includes all recommended rules and plugins.
 */
export const anStandardAngular: TSESLint.FlatConfig.ConfigArray =
  tseslint.config(
    {
      ignores: [
        '**/dist/**/*',
        '**/coverage/**/*',
        '**/projects/**/*.d.ts',
        '**/jest-reports/**/*',
        '**/report/**/*',
        '**/test-results/**/*',
        '**/node_modules/**/*',
        '**/src/gen/**/*',
        '**/.angular/**/*',
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
      files: ['**/*.html'],
      extends: [
        ...angular.configs.templateRecommended,
        ...angular.configs.templateAccessibility,
        prettierRecommended,
        ...an.configs.htmlAngular,
      ],
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      processor: angular.processInlineTemplates,
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
        ...angular.configs.tsRecommended,
        ...ngrx.configs.all,
        ...an.configs.ts,
        compat.configs['flat/recommended'],
        importPlugin.flatConfigs.recommended,
        prettierRecommended,
      ],
    },
  );
