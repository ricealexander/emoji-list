const _arrayFlatPolyfill  = require('array-flat-polyfill')

const emojisByCategory    = require('./src/reduceEmojisByCategory')
const expandAliases       = require('./src/expandAliases')
const formatMarkdownTable = require('./src/formatAsMarkdownTable')

const categoryOrder = ['People', 'Nature', 'Objects', 'Places', 'Symbols']

function buildEmojisMarkdown (emojis) {
  const emojiCategories = emojis
    .reduce(expandAliases, [])    // split emoji with multiple aliases into separate emojis
    .reduce(emojisByCategory, {}) // separate emojis into categories

  const formattedMarkdown = Object.entries(emojiCategories)
    // sort categories by categoryOrder array
    .sort((categoryA, categoryB) => {
      const indexA = categoryOrder.indexOf(categoryA[0])
      const indexB = categoryOrder.indexOf(categoryB[0])
      return indexA - indexB
    })
    .map(formatMarkdownTable)
    .join('')

  return formattedMarkdown
}

module.exports = buildEmojisMarkdown
