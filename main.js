const _arrayFlatPolyfill = require('array-flat-polyfill')
const by = require('./src/by')

const categoryOrder = ['People', 'Nature', 'Objects', 'Places', 'Symbols']

const unicodeSort = ({ unicode: emojiA }, { unicode: emojiB }) => {
  // force false values to be at the bottom of the array
  if (emojiB === false) return -1
  if (emojiA === false) return 1

  // sort alphabetically
  if (emojiA > emojiB) return 1
  if (emojiA < emojiB) return -1
  return 0
}

const emojisByCategory = (categories, emoji) => {
  const { category } = emoji
  if (categories[category] === undefined) categories[category] = []
  categories[category].push(emoji)
  return categories
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

module.exports = function (emojis) {
  const emojiCategories = emojis
    .reduce(splitAliases, [])     // split emoji with aliases into separate emojis
    .reduce(emojisByCategory, {}) // separate emojis into categories

  const formattedMarkdown = Object.entries(emojiCategories)
    .sort((categoryA, categoryB) => {
      const indexA = categoryOrder.indexOf(categoryA[0])
      const indexB = categoryOrder.indexOf(categoryB[0])
      return indexA - indexB
    })
    .map(([category, emojis]) => {
      const emojiMarkdown = emojis
        .sort(by(unicodeSort, 'alias'))
        .map(({alias}) => `:${alias}:`)
        .join(' ')

      return `### ${category}\n\n${emojiMarkdown}\n\n`
    })
    .join('')

  return formattedMarkdown
}
