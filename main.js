const _arrayFlatPolyfill  = require('array-flat-polyfill')

const emojisByCategory    = require('./src/reduceEmojisByCategory')
const expandAliases       = require('./src/expandAliases')
const formatMarkdownTable = require('./src/formatAsMarkdownTable')

const { categoryNames, categoryDisplayNames } = require('./src/categories')

const slug = string => string.toLowerCase().replace(/\s/g, '-')

const tableOfContents = categoryDisplayNames
  .map(section => `[${section}](#${slug(section)})\n`)
  .join('<br>')

function buildEmojisMarkdown (emojis) {
  const emojiCategories = emojis
    .reduce(expandAliases, [])    // split emoji with multiple aliases into separate emojis
    .reduce(emojisByCategory, {}) // separate emojis into categories

  const formattedMarkdown = Object.entries(emojiCategories)
    // sort categories by category name order
    .sort((categoryA, categoryB) => {
      const indexA = categoryNames.indexOf(categoryA[0])
      const indexB = categoryNames.indexOf(categoryB[0])
      return indexA - indexB
    })
    .map(formatMarkdownTable)
    .join('')

  return `A list of GitHub emoji markup, adapted from rxavier's _[Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)_, generated with a Grunt script for maintainability ([see repository](https://github.com/ricealexander/emoji-list)).


### Table of Contents
${tableOfContents}
${formattedMarkdown}`
}

module.exports = buildEmojisMarkdown
