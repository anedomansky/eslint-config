import type { TSESLint } from '@typescript-eslint/utils';
import { templateParser, templatePlugin } from 'angular-eslint';
import { parser, plugin } from 'typescript-eslint';

import htmlAngularConfig from './html-angular.js';
import tsConfig from './ts.js';
import uiConfig from './ui.js';
import unitJestConfig from './unit.jest.js';
import unitTestingLibraryConfig from './unit.testing-library.js';

type ANESLintConfigs = {
    htmlAngular: TSESLint.FlatConfig.ConfigArray;
    ts: TSESLint.FlatConfig.ConfigArray;
    ui: TSESLint.FlatConfig.ConfigArray;
    unitTestingLibrary: TSESLint.FlatConfig.ConfigArray;
    unitJest: TSESLint.FlatConfig.ConfigArray;
};

export type ANESLintConfig = {
    configs: ANESLintConfigs;
};

/**
 * All available ESLint configurations.
 */
const configs: ANESLintConfigs = {
    /**
     * The ESlint configuration for HTML files.
     */
    htmlAngular: htmlAngularConfig(templatePlugin, templateParser),
    /**
     * The ESLint configuration for TS files.
     */
    ts: tsConfig(plugin, parser),
    /**
     * The ESLint configuration for UI tests.
     */
    ui: uiConfig(plugin, parser),
    /**
     * The ESLint configuration for unit tests that use the `@testing-library/*`.
     */
    unitTestingLibrary: unitTestingLibraryConfig(plugin, parser),
    /**
     * The ESLint configuration for unit tests written with `Jest`.
     */
    unitJest: unitJestConfig(plugin, parser),
};

export const an: ANESLintConfig = {
    configs,
};
