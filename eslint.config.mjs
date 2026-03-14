import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const nextPluginModule = require("@next/eslint-plugin-next");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

const nextPlugin = nextPluginModule.default ?? nextPluginModule;
const nextCoreWebVitalsRules = nextPluginModule.flatConfig.coreWebVitals.rules;

const typescriptConfigs = typescriptEslint.configs["flat/recommended"].map((config) => ({
  ...config,
  files: ["**/*.{ts,tsx}"],
}));

export default [
  {
    ignores: [".next/**", "coverage/**", "dist/**", "node_modules/**", "next-env.d.ts"],
  },
  ...typescriptConfigs,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextCoreWebVitalsRules,
    },
  },
];
