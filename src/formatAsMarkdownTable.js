const chunk       = require('lodash/chunk')

const by          = require('./helpers/sortBy')
const categories  = require('./categories')

const categorySort = ({category: categoryA}, {category: categoryB}) => {
  const getIndex = group => categories.indexOf(groups => groups.includes(group))

  const indexA = getIndex(categoryA)
  const indexB = getIndex(categoryB)

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
