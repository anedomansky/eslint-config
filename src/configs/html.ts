import html from '@html-eslint/eslint-plugin';
import type { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './template-base.js';

type HTMLESLint = {
  configs: {
    'flat/recommended': TSESLint.FlatConfig.Config;
  };
};

const htmlEslint = html as unknown as HTMLESLint;

/**
 * Generates an ESLint configuration for HTML files.
 *
 * The configuration includes:
 * - Base configuration from `baseConfig`.
 * - Custom rules for Angular templates
 * - Prettier integration for code formatting.
 *
 * @param plugin - The ESLint plugin to be used.
 * @param parser - The ESLint parser to be used.
 *
 * @returns The HTML ESLint configuration.
 */
export default (
  plugin: TSESLint.FlatConfig.Plugin,
  parser: TSESLint.FlatConfig.Parser,
): TSESLint.FlatConfig.ConfigArray => [
  baseConfig(plugin, parser),
  {
    name: '@anedomansky/eslint-config/html',
    ...htmlEslint.configs['flat/recommended'],
    rules: {
      ...htmlEslint.configs['flat/recommended'].rules,
      '@html-eslint/attrs-newline': ['error', { ifAttrsMoreThan: 3 }],
      '@html-eslint/indent': ['error', 2],
      '@html-eslint/no-extra-spacing-attrs': [
        'error',
        { enforceBeforeSelfClose: true },
      ],
      '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
      'prettier/prettier': [
        'error',
        {
          singleQuote: false,
          useTabs: false,
          tabWidth: 2,
          semi: true,
          bracketSpacing: true,
          endOfLine: 'auto',
          parser: 'html',
        },
      ],
    },
  },
];
