const _objectFromEntries = require('polyfill-object.fromentries')
const chunk              = require('lodash/chunk')

const by          = require('./helpers/sortBy')
const unicodeSort = require('./sortEmojisByUnicode')
const categories  = require('./categories').categoriesObject


const formatAsMarkdownTable = ([category, emojis]) => {
  const emojiCodes = emojis
    .sort(by(unicodeSort, 'alias'))
    .map(({alias}) => `:${alias}: \`:${alias}:\``)

  const rows = chunk(emojiCodes, 3)
    .map(([first, second, third]) => (
      `| ${first} | ${second || ''} | ${third || ''} |`
    ))
    .join('\n')

  if (categories[category] === undefined) {
    const failingEmojis = emojis.sort(by('alias')).map(({alias}) => alias)
    throw new ReferenceError (`Invalid category "${category}"\nFailing Emojis: [${failingEmojis.join(', ')}]`)
  }

  return `
### ${categories[category]}

| | | |
|---|---|---|
${rows}
`
}

module.exports = formatAsMarkdownTable
