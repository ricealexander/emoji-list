const _writeFile = require('../tasks/helpers/writeFile')
const emojisJSON = require('../emojis.json')

const sortByEmojiAlias = ({ alias: aliasesA }, { alias: aliasesB }) => {
  const [ aliasA ] = [aliasesA].flat()
  const [ aliasB ] = [aliasesB].flat()

  if (aliasA > aliasB) return 1
  if (aliasA < aliasB) return -1
  return 0
}

module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  // Alphabetize emojis.json
  grunt.registerTask('alphabetize', 'Re-alphabetize emojis.json', () => {
    const sortedList = emojisJSON.sort(sortByEmojiAlias)
    const JSONContent = JSON.stringify(sortedList, null, 2)
    writeFile('emojis.json', `${JSONContent}\n`)
  })
}
