import type { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './template-base.js';

/**
 * Generates an ESLint configuration for Angular-HTML templates.
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
    name: '@anedomansky/eslint-config/html-angular',
    rules: {
      '@angular-eslint/template/alt-text': 'warn',
      '@angular-eslint/template/attributes-order': [
        'error',
        {
          alphabetical: true,
          order: [
            'STRUCTURAL_DIRECTIVE', // deprecated, use @if and @for instead
            'TEMPLATE_REFERENCE', // e.g. `<input #inputRef>`
            'ATTRIBUTE_BINDING', // e.g. `<input required>`, `id="3"`
            'INPUT_BINDING', // e.g. `[id]="3"`, `[attr.colspan]="colspan"`,
            'TWO_WAY_BINDING', // e.g. `[(id)]="id"`,
            'OUTPUT_BINDING', // e.g. `(idChange)="handleChange()"`,
          ],
        },
      ],
      '@angular-eslint/template/button-has-type': 'warn',
      '@angular-eslint/template/click-events-have-key-events': 'warn',
      '@angular-eslint/template/cyclomatic-complexity': [
        'warn',
        { maxComplexity: 10 },
      ],
      '@angular-eslint/template/elements-content': 'warn',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/interactive-supports-focus': 'warn',
      '@angular-eslint/template/label-has-associated-control': 'warn',
      '@angular-eslint/template/mouse-events-have-key-events': 'warn',
      '@angular-eslint/template/no-autofocus': 'warn',
      '@angular-eslint/template/no-distracting-elements': 'warn',
      '@angular-eslint/template/no-positive-tabindex': 'warn',
      '@angular-eslint/template/prefer-control-flow': 'warn',
      '@angular-eslint/template/prefer-ngsrc': 'warn',
      '@angular-eslint/template/prefer-self-closing-tags': 'warn',
      '@angular-eslint/template/table-scope': 'warn',
      '@angular-eslint/template/use-track-by-function': 'warn',
      '@angular-eslint/template/valid-aria': 'warn',
    },
  },
];
