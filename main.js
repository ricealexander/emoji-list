/* eslint-disable unicorn/no-fn-reference-in-iterator */
/* eslint-disable unicorn/prefer-flat-map */
// eslint-disable-next-line import/no-unassigned-import
require('array-flat-polyfill')

const by = require('./src/by')

const unicodeSort = ({ unicode: emojiA }, { unicode: emojiB }) => {
  // force false values to be at the bottom of the array
  if (emojiB === false) return -1
  if (emojiA === false) return 1

  // sort alphabetically
  if (emojiA > emojiB) return 1
  if (emojiA < emojiB) return -1
  return 0
}

// emojis can have multiple aliases,
// but each alias should be treated as their own emoji
const splitAliases = (emojis, {alias: tags, category, unicode}) => {
  const aliases = [tags].flat()
  aliases.forEach(alias => {
    const emoji = { alias, category, unicode }
    emojis.push(emoji)
  })
  return emojis
}

module.exports = function (emojiJSON) {
  const emojis = emojiJSON.reduce(splitAliases, [])

  return emojis
    .sort(by('category', unicodeSort, 'alias'))
    .map(({alias}) => `:${alias}:`)
    .join('\n')
}
