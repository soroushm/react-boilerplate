'use strict'

module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          src: './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
  sourceMaps: true
}
