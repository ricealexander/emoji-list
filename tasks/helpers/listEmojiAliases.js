const _arrayFlatPolyfill = require('array-flat-polyfill')

const toArray = require('./toArray')

const listEmojiAliases = emojis => emojis
  .map(({ alias }) => toArray(alias))
  .flat()

module.exports = listEmojiAliases
