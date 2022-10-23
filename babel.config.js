module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@': './src',
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@layout': './src/layout',
            '@navigations': './src/navigations',
            '@redux': './src/redux',
            '@styles': './src/styles',
            '@theme': './src/theme',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
