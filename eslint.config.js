import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigRecommended from "eslint/conf/eslint-recommended";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import eslintParserTypescript from "@typescript-eslint/parser";

const compat = new FlatCompat({
  baseDirectory: __dirname, // Ensure this points to your project root
  resolvePluginsRelativeTo: __dirname,
});

export default [
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
