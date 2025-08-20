import type { Linter, Rule } from 'eslint';
import eslint from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import regexPlugin from 'eslint-plugin-regexp';
import type { TSESLint } from '@typescript-eslint/utils';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

import { an } from './index.js';

interface PlaywrightPlugin {
  configs: {
    'flat/recommended': Linter.Config;
    'playwright-test': Linter.Config;
    recommended: Linter.Config;
  };
  rules: Record<string, Rule.RuleModule>;
}

const playwrightPlugin: PlaywrightPlugin =
  playwright as unknown as PlaywrightPlugin;

/**
 * This is the Typescript ESLint configuration that includes all recommended rules and plugins.
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
      'unused-imports': unusedImports,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...an.configs.ts,
      eslintConfigPrettier,
      regexPlugin.configs['flat/recommended'],
    ],
  },
);
