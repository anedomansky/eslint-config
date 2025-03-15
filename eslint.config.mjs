// @ts-check

import tseslint from "typescript-eslint";
import { anStandardTS } from './dist/index.js'


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
