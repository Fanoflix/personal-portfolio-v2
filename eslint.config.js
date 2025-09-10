import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

const ignores = [
  "**/*.lock",
  "**/*.json",
  "**/*.css",
  "**/*.ico",
  "**/*.png",
  "**/*.jpg",
  "**/*.jpeg",
  "**/*.md",
  "**/*.woff2",
  "/.husky",
  ".prettierignore",
  "dev.Dockerfile",
  "docker-compose.yml",
  "public/site.webmanifest",
  ".next/",
  "custom.d.ts",
  "global.d.ts",
  "playwright-report/",
];

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("next", "next/core-web-vitals"),
  ...compat.extends("prettier"),

  {
    plugins: {
      // key is the rule prefix used in config
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "no-debugger": "error",
      "import/first": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "class-methods-use-this": "warn",
      eqeqeq: "error",
      "import/no-duplicates": "error",
      "require-await": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "react/hook-use-state": "error",
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-max-depth": ["warn", { max: 10 }],
      curly: "error",
      "@typescript-eslint/no-explicit-any": "off",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "import/named": "off",
      "import/no-unresolved": "off",
    },
    ignores: ignores,
  },
];
