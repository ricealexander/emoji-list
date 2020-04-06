const _arrayFlatPolyfill = require('array-flat-polyfill')
const chunk       = require('lodash/chunk')
const _writeFile = require('../tasks/helpers/writeFile')
const emojisJSON = require('../emojis.json')

const categories          = require('../categories.json')

const toArray             = require('../tasks/helpers/toArray')

const by          = require('../tasks/helpers/sortBy')

const categoryGroups = categories.map(({groups}) => groups).flat()

const toSlug = string => string.toLowerCase().replace(/\s+/g, '-')

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



// emojis may have multiple aliases
// split these aliases into individual emoji objects
const expandAliases = emojis => emojis.reduce((list, emoji) => {
  const aliases = toArray(emoji.alias)
  aliases.forEach(alias => list.push({ ...emoji, alias}))
  return list
}, [])

const tableOfContents = categories
  .map(({header}) => `[${header}](#${toSlug(header)})\n`)
  .join('<br>')

function formatEmojisAsMarkdown (_emojis) {
  const emojis = expandAliases(_emojis)

  // build out each section
  const markdownTables = categories
    .map(({header, groups}) => {
      const emojisInSection = emojis.filter(({category}) => groups.includes(category))
      if (!emojisInSection) {
        throw new ReferenceError(`No emojis could be found for the section ${header}`)
      }
      return formatAsMarkdownTable(header, emojisInSection)
    })
    .join('\n')

  return `A list of GitHub emoji markup, adapted from rxavier's _[Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)_, generated with a Grunt script for maintainability ([see repository](https://github.com/ricealexander/emoji-list)).


### Table of Contents
${tableOfContents}
${markdownTables}`
}

module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  grunt.registerTask('build', 'Write Emoji List Markdown file', () => {
    const markdown = formatEmojisAsMarkdown(emojisJSON)
    writeFile('dist/emoji-list.md', markdown)
  })
}
