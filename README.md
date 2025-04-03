# eslint-config

[![npm version](https://badge.fury.io/js/@anedomansky%2Feslint-config.svg)](https://badge.fury.io/js/@anedomansky%2Feslint-config)

ESLint configuration that helps to write quality code.

## Features

- Opinionated but highly customizable
- Designed to work with Typescript, Jest, [@testing-library/*](https://testing-library.com), Angular (HTML + TS)
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
- Sensible defaults
- Rules are easily customized

> ESLint v9.0.0+ is required.

## Installation

`npm i -D @anedomansky/eslint-config`

## Usage

<details>
<summary>Setup</summary>
<br />

Create a `eslint.config.mjs` in the project root with the following content:

```js
// @ts-check

import tseslint from "typescript-eslint";
import { anStandardTS } from '@anedomansky/eslint-config'


export default tseslint.config(
    ...anStandardTS,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);

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
        "source.fixAll.eslint": "explicit"
    },
    // Suppress stylistic rules in your IDE, but enable auto fix
    "eslint.rules.customizations": [
        {
            "rule": "prettier/prettier",
            "severity": "off",
            "fixable": true
        },
        {
            "rule": "simple-import-sort/*",
            "severity": "off",
            "fixable": true
        }
    ],
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
        "postcss"
    ],
    // Enable ESLint as default formatter for specific file types
    "[typescript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[html]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[json]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[json5]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    }
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
- `**/.spec.ts`|`**/*.test.ts`: Config and rules specific to Jest and @testing-library/*
- `**/*.e2e.spec.ts`|`**/*.e2e.test.ts`: Config and rules specific to Playwright

</details>

<details>
<summary>anStandardAngular</summary>
<br />

Includes configs and rules for the following file types:

- `**/*.ts`: Config and rules specific to TypeScript (including formatter rules and Angular specific rules)
- `**/.spec.ts`|`**/*.test.ts`: Config and rules specific to Jest and @testing-library/*
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

- `**/*.json`: Config and rules specific to JSON (including formatter rules)
- `**/*.jsonc`: Config and rules specific to JSONC (including formatter rules)
- `**/*.json5`: Config and rules specific to JSON5 (including formatter rules)

</details>
<br />

Aside from that you can [compose your own configuration](https://typescript-eslint.io/getting-started) with the following configurations:

|Name|Description|Formatter|Since
|------|------|------|------|
|`an.configs.ts`|Relevant config and rules for TS files|Prettier|1.0.0|
|`an.configs.html`| Relevant config and rules for HTML files|Prettier|1.1.0|
|`an.configs.htmlAngular`|Relevant config and rules for Angular templates|Prettier|1.0.0|
|`an.configs.json`|Relevant config and rules for JSON files|Prettier|1.2.0|
|`an.configs.jsonc`|Relevant config and rules for JSONC files|Prettier|1.2.0|
|`an.configs.json5`|Relevant config and rules for JSON5 filestemplates|Prettier|1.2.0|
|`an.configs.unit`|Relevant config and rules for Jest test files|---|1.0.0|
|`an.configs.unitTestingLibrary`|Relevant config and rules for test files that use @testing-library/*|---|1.0.0|
|`an.configs.ui`|Relevant config and rules for Playwright test files|---|1.0.0|

## Roadmap

Configurations/Formatters for:
- JavaScript
- SCSS
- CSS
- Markdown
