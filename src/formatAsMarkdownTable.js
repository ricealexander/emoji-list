const by          = require('./helpers/sortBy')
const unicodeSort = require('./sortEmojisByUnicode')

const formatAsMarkdownTable = ([category, emojis]) => {
  const emojiMarkdown = emojis
    .sort(by(unicodeSort, 'alias'))
    .map(({alias}) => `:${alias}:`)
    .join(' ')

  return `### ${category}\n\n${emojiMarkdown}\n\n`
}

module.exports = formatAsMarkdownTable
