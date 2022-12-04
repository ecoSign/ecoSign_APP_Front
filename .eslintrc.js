// module.exports = {
//     root: true,
//     extends: '@react-native-community',
//     parser: '@typescript-eslint/parser',
//     plugins: ['@typescript-eslint'],
//     overrides: [
//         {
//             files: ['*.ts', '*.tsx'],
//             rules: {
//                 '@typescript-eslint/no-shadow': ['error'],
//                 'no-shadow': 'off',
//                 'no-undef': 'off',
//             },
//         },
//     ],
// };
module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'prettier',
  ],
  rules: {
    'arrow-body-style': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  root: true,
};
