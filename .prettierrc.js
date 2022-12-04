module.exports = {
  // arrowParens: 'avoid',
  // bracketSameLine: true,
  // bracketSpacing: false,
  // singleQuote: true,
  // trailingComma: 'all',

  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'always',
  importOrder: [
    '^react(.*)',
    'antd/(.*)',
    '<THIRD_PARTY_MODULES>',
    '@/(.*)',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
