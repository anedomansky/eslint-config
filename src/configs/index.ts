import htmlParser from '@html-eslint/parser';
import type { TSESLint } from '@typescript-eslint/utils';
import { templateParser } from 'angular-eslint';
import { parser, plugin } from 'typescript-eslint';

import { anTemplatePlugin } from '../plugins/index.js';
import htmlConfig from './html.js';
import htmlAngularConfig from './html-angular.js';
import jsonConfig from './json.js';
import json5Config from './json5.js';
import jsoncConfig from './jsonc.js';
import tsConfig from './ts.js';
import uiConfig from './ui.js';
import unitJestConfig from './unit.jest.js';
import unitTestingLibraryConfig from './unit.testing-library.js';

type ANESLintConfigs = {
  /**
   * The ESLint configuration for HTML files.
   */
  html: TSESLint.FlatConfig.ConfigArray;
  /**
   * The ESLint configuration for Angular-HTML files.
   */
  htmlAngular: TSESLint.FlatConfig.ConfigArray;
  /**
   * The ESLint configuration for JSON files.
   */
  json: TSESLint.FlatConfig.ConfigArray;
  /**
   * The ESLint configuration for JSONC files.
   */
  jsonc: TSESLint.FlatConfig.ConfigArray;
  /**
   * The ESLint configuration for JSON5 files.
   */
  json5: TSESLint.FlatConfig.ConfigArray;
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
  html: htmlConfig(plugin, htmlParser),
  htmlAngular: htmlAngularConfig(anTemplatePlugin, templateParser),
  json: jsonConfig(),
  jsonc: jsoncConfig(),
  json5: json5Config(),
  ts: tsConfig(plugin, parser),
  ui: uiConfig(plugin, parser),
  unitTestingLibrary: unitTestingLibraryConfig(plugin, parser),
  unitJest: unitJestConfig(plugin, parser),
};

export const an: ANESLintConfig = {
  configs,
};
