# eslint-config

[![npm version](https://badge.fury.io/js/@anedomansky%2Feslint-config.svg)](https://badge.fury.io/js/@anedomansky%2Feslint-config)

ESLint configuration that helps to write quality code.

## Features

- Opinionated but highly customizable
- Designed to work with Typescript, Jest, [@testing-library/\*](https://testing-library.com), Angular (HTML + TS)
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
- Sensible defaults
- Rules are easily customized

> ESLint `v9.0.0+` is required.

> Since `v1.5.0` this package requires `typescript-eslint` in `^8.39.1` or higher in order to work.

> Since `v2.0.0` this package no longer makes use of `eslint-plugin-prettier`. Instead, it is recommended to use [Prettier](https://prettier.io/) directly for formatting.

## Installation

`npm i -D @anedomansky/eslint-config`

## Usage

<details>
<summary>Setup</summary>
<br />

Create a `eslint.config.mjs` in the project root with the following content:

```js
// @ts-check

import tseslint from 'typescript-eslint';
import { anStandardTS } from '@anedomansky/eslint-config';

export default tseslint.config(...anStandardTS, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

Now you can add scripts to the `package.json` in order to manually lint your project:

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

</details>

<details>
<summary>VS Code Integration</summary>
<br />

In order to activate linting while you're actively editing files install the [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Auto fix on explicit save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  },
  // Activates Prettier as default formatter
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // Enable format on save
  "editor.formatOnSave": true,
  // Enable ESLint
  "eslint.enable": true,
  // Activate ESLint for all available languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss",
  ],
}
```

</details>

## Customization

There are multiple preconfigured configuration packs that you can use:

<details>
<summary>anStandardTS</summary>
<br />

Includes configs and rules for the following file types:

- `**/*.ts`: Config and rules specific to TypeScript (including formatter rules)
- `**/.spec.ts`|`**/*.test.ts`: Config and rules specific to Jest and @testing-library/\*
- `**/*.e2e.spec.ts`|`**/*.e2e.test.ts`: Config and rules specific to Playwright

</details>

<details>
<summary>anStandardAngular</summary>
<br />

Includes configs and rules for the following file types:

- `**/*.ts`: Config and rules specific to TypeScript (including formatter rules and Angular specific rules)
- `**/.spec.ts`|`**/*.test.ts`: Config and rules specific to Jest and @testing-library/\*
- `**/*.e2e.spec.ts`|`**/*.e2e.test.ts`: Config and rules specific to Playwright
- `**/*.html`: Config and rules specific to Angular template files (including formatter rules)

</details>

<details>
<summary>anStandardHTML (since v1.1.0)</summary>
<br />

Includes configs and rules for the following file types:

- `**/*.html`: Config and rules specific to HTML (including formatter rules)

</details>

<details>
<summary>anStandardJSON (since v1.2.0)</summary>
<br />

Includes configs and rules for the following file types:

- `**/*.json`: Config and rules specific to JSON
- `**/*.jsonc`: Config and rules specific to JSONC
- `**/*.json5`: Config and rules specific to JSON5

</details>

<details>
<summary>Rule customization</summary>
<br />

Add a `rules` section to your `eslint.config.mjs` file to customize rules:

```js
{
  // ... other config
  rules: {
    // Disable a rule
    "no-console": "off",
    // Enable a rule with a specific severity
    "no-unused-vars": "warn",
    // Enable a rule with options and a specific severity
    "@typescript-eslint/no-explicit-any": ["warn", { "ignoreRestArgs": true }]
  }
}
```

</details>

<details>
<summary>Formatting with Prettier</summary>
<br />

Since `v2.0.0` this package no longer makes use of `eslint-plugin-prettier`. Instead, it is recommended to use [Prettier](https://prettier.io/) directly for formatting.
In order to do so, you can add a `.prettierrc` file to your project root with the following content:

```json
{
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "bracketSameLine": true,
  "endOfLine": "auto",
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

</details>
<br />

Aside from that you can [compose your own configuration](https://typescript-eslint.io/getting-started) with the following configurations:

| Name                            | Description                                                           | Since |
| ------------------------------- | --------------------------------------------------------------------- | ----- |
| `an.configs.ts`                 | Relevant config and rules for TS files                                | 1.0.0 |
| `an.configs.html`               | Relevant config and rules for HTML files                              | 1.1.0 |
| `an.configs.htmlAngular`        | Relevant config and rules for Angular templates                       | 1.0.0 |
| `an.configs.json`               | Relevant config and rules for JSON files                              | 1.2.0 |
| `an.configs.jsonc`              | Relevant config and rules for JSONC files                             | 1.2.0 |
| `an.configs.json5`              | Relevant config and rules for JSON5 files                             | 1.2.0 |
| `an.configs.unit`               | Relevant config and rules for Jest test files                         | 1.0.0 |
| `an.configs.unitTestingLibrary` | Relevant config and rules for test files that use @testing-library/\* | 1.0.0 |
| `an.configs.ui`                 | Relevant config and rules for Playwright test files                   | 1.0.0 |

## Roadmap

Configurations/Formatters for:

- JavaScript
- SCSS
- CSS
- Markdown
