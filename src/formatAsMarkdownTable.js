const _objectFromEntries = require('polyfill-object.fromentries')
const chunk              = require('lodash/chunk')

const by          = require('./helpers/sortBy')
const categories  = require('./categories')

const unicodeSort = ({ alias: aliasesA }, { alias: aliasesB }) => {
  const [ aliasA ] = [aliasesA].flat()
  const [ aliasB ] = [aliasesB].flat()

  if (aliasA > aliasB) return 1
  if (aliasA < aliasB) return -1
  return 0
}


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
