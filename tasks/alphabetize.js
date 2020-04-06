const sortEmojisByAlias = require('../src/sortEmojisByAlias')
const _writeFile = require('../tasks/helpers/writeFile')
const emojisJSON = require('../emojis.json')

module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  // Alphabetize emojis.json
  grunt.registerTask('alphabetize', 'Re-alphabetize emojis.json', () => {
    const sortedList = emojisJSON.sort(sortEmojisByAlias)
    const JSONContent = JSON.stringify(sortedList, null, 2)
    writeFile('emojis.json', `${JSONContent}\n`)
  })
}
