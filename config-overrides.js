/* config-overrides.js */
/* eslint-disable */

const { useBabelRc, override, useEslintRc } = require('customize-cra')
const enableEslintIgnore = require('customize-cra-eslint-ignore')

module.exports = override(useBabelRc(), useEslintRc(), enableEslintIgnore())
