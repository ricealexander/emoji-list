const _arrayFlatPolyfill = require('array-flat-polyfill')

const toArray = require('./toArray')

const listEmojiAliases = emojis => emojis.flatMap(({ alias }) => toArray(alias))


module.exports = listEmojiAliases
