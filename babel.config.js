'use strict'

module.exports = {
  presets: ['@babel/preset-flow', '@babel/preset-env'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          src: './src'
        }
      }
    ]
  ],
  sourceMaps: true
}
