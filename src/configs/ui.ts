import type { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './base.js';

/**
 * Generates an ESLint configuration for the UI project.
 *
 * @param plugin - The ESLint plugin to be used.
 * @param parser - The ESLint parser to be used.
 * @returns The UI-Testing ESLint configuration.
 */
export default (
    plugin: TSESLint.FlatConfig.Plugin,
    parser: TSESLint.FlatConfig.Parser,
): TSESLint.FlatConfig.ConfigArray => [
        baseConfig(plugin, parser),
        {
            name: '@anedomansky/eslint-config/ui',
            rules: {
                'playwright/expect-expect': [
                    'error',
                    {
                        assertFunctionNames: [
                            'expect',
                        ],
                    },
                ],
            },
        },
    ];
