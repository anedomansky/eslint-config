import { parser, plugin } from 'typescript-eslint';
import htmlParser from '@html-eslint/parser';
import { templateParser, tsPlugin } from 'angular-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

import { anTemplatePlugin } from '../plugins/index.js';
import htmlAngularConfig from './html-angular.js';
import tsAngularConfig from './ts-angular.js';
import htmlConfig from './html.js';
import json5Config from './json5.js';
import jsoncConfig from './jsonc.js';
import jsonConfig from './json.js';
import tsConfig from './ts.js';
import uiConfig from './ui.js';
import unitJestConfig from './unit.jest.js';
import unitTestingLibraryConfig from './unit.testing-library.js';

interface ANESLintConfigs {
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
 * The ESLint configuration for Angular-TS files.
 */
tsAngular: TSESLint.FlatConfig.ConfigArray;
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
}


export interface ANESLintConfig {
  configs: ANESLintConfigs;
}

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
  tsAngular: tsAngularConfig(tsPlugin, parser),
  ui: uiConfig(plugin, parser),
  unitTestingLibrary: unitTestingLibraryConfig(plugin, parser),
  unitJest: unitJestConfig(plugin, parser),
};

export const an: ANESLintConfig = {
  configs,
};
