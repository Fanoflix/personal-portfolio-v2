const { FlatCompat } = require("@eslint/eslintrc");

const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const unusedImports = require("eslint-plugin-unused-imports");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

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

module.exports = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("prettier"),
  ...compat.plugins("simple-import-sort"),

  {
    plugins: {
      "unused-imports": unusedImports,
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
