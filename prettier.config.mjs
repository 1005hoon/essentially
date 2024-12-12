const config = {
  // Enable all available prettier plugins
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],

  // Use double quotes consistently
  singleQuote: false,

  // Add trailing commas for cleaner git diffs
  trailingComma: "all",

  // Maintain 110 character line width for readability
  printWidth: 110,

  // Use 2 spaces for indentation
  tabWidth: 2,
  useTabs: false,

  // Add semicolons for consistency
  semi: true,

  // Enforce consistent bracket spacing
  bracketSpacing: true,

  // Place > of closing tags on last line
  bracketSameLine: false,

  // Use parentheses around arrow function parameters
  arrowParens: "always",

  // Maintain consistent endOfLine characters
  endOfLine: "lf",

  // Sort imports automatically
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  tailwindFunctions: ["clsx", "cn", "twmerge", "cva"],
};

export default config;
