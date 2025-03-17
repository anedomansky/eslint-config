# eslint-config

[![npm version](https://badge.fury.io/js/@anedomansky%2Feslint-config.svg)](https://badge.fury.io/js/@anedomansky%2Feslint-config)

ESLint configuration that helps to write quality code.

## Features

- Opinionated but highly customizable
- Designed to work with Typescript, JavaScript, HTML, Jest, @testing-library/*, Angular, SCSS and CSS
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
    ]
}
```
</details>

## Customization

There are multiple preconfigured configuration packs that you can use:

- `anStandardTS`: 
- `anStandardAngular`:

Aside from that you can build your own configuration with the following configurations:

|Name|Description|
|------|-------------|
|`an.configs.ts`||
|`an.configs.html`||
|`an.configs.unit`||
|`an.configs.unitTestingLibrary`||
|`an.configs.ui`||

TODO:
- write README
- Add prettier configs for html, css, scss, js, json formatting
