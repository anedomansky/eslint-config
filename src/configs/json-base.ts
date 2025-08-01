import type { TSESLint } from '@typescript-eslint/utils';

/**
 * Generates the base ESLint configuration for the @anedomansky/eslint-config package.
 *
 * @param plugin - The ESLint plugin to be used.
 * @param parser - The ESLint parser to be used.
 * @returns The base ESLint configuration.
 */
export default (
  plugin: TSESLint.FlatConfig.Plugin,
): TSESLint.FlatConfig.Config => ({
  name: '@anedomansky/eslint-config/base',
  plugins: {
    '@anedomansky/eslint-config/json': plugin,
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
});
