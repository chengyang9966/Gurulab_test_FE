module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "react-app",
      "react-app/jest",
      "prettier",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/typescript",
      "plugin:react/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-empty-function": "off",
      "react/jsx-no-target-blank": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "react/prop-types":"off",
      "@typescript-eslint/ban-ts-comment":"off",
      "no-prototype-builtins":"off",
      "no-empty": ["error", { "allowEmptyCatch": true }],
      'no-constant-condition':"off"
    },
  };
  