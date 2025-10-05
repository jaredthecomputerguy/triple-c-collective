/** @type {import('prettier').Config} */
const config = {
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  printWidth: 80,
  bracketSameLine: true,
  bracketSpacing: true,
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"]
};

export default config;
