import type {
  FlatConfig,
  SharedConfig,
} from '@typescript-eslint/utils/ts-eslint';

import { rules } from './rules/index.js';

const meta: SharedConfig.PluginMeta = {
  name: '@anedomansky/eslint-config/template',
  version: '0.0.1', // get from package.json without adding the package.json to the dist folder
};

export const anTemplatePlugin: FlatConfig.Plugin = {
  meta,
  rules,
};
