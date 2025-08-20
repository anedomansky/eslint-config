// @ts-check

import tseslint from "typescript-eslint";
import { anStandardAngular, anStandardTS, anStandardHTML, anStandardJSON } from './dist/index.js';


export default tseslint.config(
    ...anStandardTS,
    ...anStandardHTML,
    ...anStandardJSON,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
