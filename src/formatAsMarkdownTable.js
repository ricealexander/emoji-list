const chunk = require('lodash/chunk')

const by = require('./helpers/sortBy')
const unicodeSort = require('./sortEmojisByUnicode')

console.log(chunk)

const formatAsMarkdownTable = ([category, emojis]) => {
  const emojiCodes = emojis
    .sort(by(unicodeSort, 'alias'))
    .map(({alias}) => `:${alias}: \`:${alias}:\``)

  const rows = chunk(emojiCodes, 3)
    .map(([first, second, third]) => (
      `| ${first} | ${second || ''} | ${third || ''} |`
    ))
    .join('\n')

  return `
### ${category}

| | | |
|---|---|---|
${rows}
`
}

module.exports = formatAsMarkdownTable
