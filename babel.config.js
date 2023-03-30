module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@app': './src',
        },
      },
    ],
  ],
};
