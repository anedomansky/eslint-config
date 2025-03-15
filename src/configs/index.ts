import type { TSESLint } from '@typescript-eslint/utils';
import { templateParser, templatePlugin } from 'angular-eslint';
import { parser, plugin } from 'typescript-eslint';

import htmlAngularConfig from './html-angular.js';
import tsConfig from './ts.js';
import uiConfig from './ui.js';
import unitJestConfig from './unit.jest.js';
import unitTestingLibraryConfig from './unit.testing-library.js';

type ANESLintConfigs = {
  /**
   * The ESlint configuration for HTML files.
   */
  htmlAngular: TSESLint.FlatConfig.ConfigArray;
  /**
   * The ESLint configuration for TS files.
   */
  ts: TSESLint.FlatConfig.ConfigArray;
  /**
   * The ESLint configuration for UI tests.
   */
  ui: TSESLint.FlatConfig.ConfigArray;
  /**
   * The ESLint configuration for unit tests that use the `@testing-library/*`.
   */
  unitTestingLibrary: TSESLint.FlatConfig.ConfigArray;
  /**
   * The ESLint configuration for unit tests written with `Jest`.
   */
  unitJest: TSESLint.FlatConfig.ConfigArray;
};

export type ANESLintConfig = {
  configs: ANESLintConfigs;
};

/**
 * All available ESLint configurations.
 */
const configs: ANESLintConfigs = {
  htmlAngular: htmlAngularConfig(templatePlugin, templateParser),
  ts: tsConfig(plugin, parser),
  ui: uiConfig(plugin, parser),
  unitTestingLibrary: unitTestingLibraryConfig(plugin, parser),
  unitJest: unitJestConfig(plugin, parser),
};

export const an: ANESLintConfig = {
  configs,
};
