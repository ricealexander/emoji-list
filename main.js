const difference          = require('lodash/difference')

const categories          = require('./src/categories')
const formatMarkdownTable = require('./src/formatAsMarkdownTable')
const toArray             = require('./src/helpers/toArray')
const toSlug              = require('./src/helpers/toSlug')

// emojis may have multiple aliases
// split these aliases into individual emoji
const expandAliases = emojis => emojis.reduce((list, emoji) => {
  const aliases = toArray(emoji.alias)
  aliases.forEach(alias => list.push({ ...emoji, alias}))
  return list
}, [])

const validateEmojis = emojis => {
  const categoryGroups = categories.reduce((list, {groups}) => [...list, ...groups], [])

  const uniqueGroups = emojis.reduce((list, emoji) => {
    if (!list.includes(emoji.category)) list.push(emoji.category)
    return list
  }, [])

  // all categories used by emoji must correspond
  const invalidGroups = difference(uniqueGroups, categoryGroups)
  if (invalidGroups.length > 0) {
    throw new ReferenceError((invalidGroups.length === 1)
      ? `Invalid Category ${invalidGroups[0]}`
      : `Invalid Categories ${invalidGroups.join(', ')}`,
    )
  }

  return true
}

const tableOfContents = categories
  .map(({header}) => `[${header}](#${toSlug(header)})\n`)
  .join('<br>')


function buildMarkdown (_emojis) {
  const emojis = expandAliases(_emojis)
  validateEmojis(emojis)

  // build out each section
  const markdownTables = categories.map(({header, groups}) => {
    const emojisInSection = emojis.filter(({category}) => groups.includes(category))
    if (!emojisInSection) {
      throw new ReferenceError(`No emojis could be found for the section ${header}`)
    }
    return formatMarkdownTable(header, emojisInSection)
  })

  return `A list of GitHub emoji markup, adapted from rxavier's _[Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)_, generated with a Grunt script for maintainability ([see repository](https://github.com/ricealexander/emoji-list)).


### Table of Contents
${tableOfContents}
${markdownTables}`
}

module.exports = buildMarkdown
