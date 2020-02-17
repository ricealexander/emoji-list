const _arrayFlatPolyfill = require('array-flat-polyfill')
const chunk       = require('lodash/chunk')

const by          = require('./helpers/sortBy')
const categories  = require('../categories.json')

const categoryGroups = categories.map(({groups}) => groups).flat()

const categorySort = ({category: categoryA}, {category: categoryB}) => {
  const indexA = categoryGroups.indexOf(categoryA)
  const indexB = categoryGroups.indexOf(categoryB)

  if (indexA > indexB) return 1
  if (indexA < indexB) return -1
  return 0
}

const formatAsMarkdownTable = (header, emojis) => {
  const codes = emojis
    .sort(by(categorySort, 'unicode', 'alias'))
    .map(({alias}) => `:${alias}: \`:${alias}:\``)

  const rows = chunk(codes, 3)
    .map(([first, second, third]) => (
      `| ${first} | ${second || ''} | ${third || ''} |`
    ))
    .join('\n')

  return `
### ${header}

| | | |
|---|---|---|
${rows}
`
}

module.exports = formatAsMarkdownTable
