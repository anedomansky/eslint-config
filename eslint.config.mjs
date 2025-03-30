// @ts-check

import tseslint from "typescript-eslint";
import { anStandardTS, anStandardHTML } from './dist/index.js';


export default tseslint.config(
    ...anStandardTS,
    ...anStandardHTML,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
