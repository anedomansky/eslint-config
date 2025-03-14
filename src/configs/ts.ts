import type { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './base.js';

/**
 * Generates an ESLint configuration for TypeScript files.
 *
 * The configuration includes:
 * - Base configuration from `baseConfig`.
 * - Import sorting and organization rules.
 * - TypeScript-specific linting rules for type safety and code quality.
 * - Prettier integration for code formatting.
 * - Restriction on the use of certain TypeScript features like enums.
 *
 * @param plugin - The ESLint plugin to be used.
 * @param parser - The ESLint parser to be used.
 * @returns The TS ESLint configuration.
 */
export default (
    plugin: TSESLint.FlatConfig.Plugin,
    parser: TSESLint.FlatConfig.Parser,
): TSESLint.FlatConfig.ConfigArray => [
        baseConfig(plugin, parser),
        {
            name: '@anedomansky/eslint-config/ts',
            rules: {
                '@typescript-eslint/await-thenable': 'error',
                '@typescript-eslint/explicit-module-boundary-types': 'error',
                '@typescript-eslint/no-base-to-string': 'warn',
                '@typescript-eslint/no-confusing-void-expression': 'warn',
                '@typescript-eslint/no-deprecated': 'warn',
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/no-extraneous-class': [
                    'error',
                    { allowWithDecorator: true },
                ],
                '@typescript-eslint/no-floating-promises': 'warn',
                '@typescript-eslint/no-misused-promises': 'warn',
                '@typescript-eslint/no-redundant-type-constituents': 'warn',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-unnecessary-condition': 'warn',
                '@typescript-eslint/no-unnecessary-type-parameters': 'warn',
                '@typescript-eslint/no-unsafe-call': 'warn',
                '@typescript-eslint/no-unsafe-argument': 'warn',
                '@typescript-eslint/no-unsafe-assignment': 'warn',
                '@typescript-eslint/no-unsafe-member-access': 'warn',
                '@typescript-eslint/no-unsafe-return': 'warn',
                '@typescript-eslint/prefer-promise-reject-errors': 'warn',
                '@typescript-eslint/require-await': 'warn',
                '@typescript-eslint/restrict-plus-operands': 'warn',
                '@typescript-eslint/restrict-template-expressions': 'warn',
                '@typescript-eslint/unbound-method': 'warn',
                'import/first': 'error',
                'import/newline-after-import': 'error',
                'import/no-duplicates': 'error',
                'lines-between-class-members': ['warn', 'always'],
                'no-console': ['error'],
                'no-restricted-syntax': [
                    'error',
                    {
                        selector: 'TSEnumDeclaration',
                        message:
                            'Do not use enum at all. See: https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls',
                    },
                ],
                'prefer-promise-reject-errors': 'off',
                'prettier/prettier': [
                    'error',
                    {
                        singleQuote: true,
                        useTabs: false,
                        tabWidth: 2,
                        semi: true,
                        bracketSpacing: true,
                        endOfLine: 'auto',
                    },
                ],
                'require-await': 'off',
                'simple-import-sort/exports': 'error',
                'simple-import-sort/imports': 'error',
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': [
                    'warn',
                    {
                        vars: 'all',
                        varsIgnorePattern: '^_',
                        args: 'after-used',
                        argsIgnorePattern: '^_',
                    },
                ],
            },
        },
    ];
