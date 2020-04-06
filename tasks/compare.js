const difference = require('lodash/difference')
const listEmojiAliases = require('./helpers/listEmojiAliases')
const _writeFile = require('./helpers/writeFile')
const compareEmojis = require('../compare-emojis.json')
const emojisJSON    = require('../emojis.json')

module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  grunt.registerTask('compare', 'Compare emojis against a list of potentially-missed emoji', function () {
    const emojis = listEmojiAliases(emojisJSON)
    const missingEmojis = difference(compareEmojis, emojis)

    const JSONContent = JSON.stringify(missingEmojis, null, 2)
    const success = writeFile('dist/missing-emojis.json', `${JSONContent}\n`)

    if (success) console.info(
      (missingEmojis.length === 0)
        ? 'No missing emoji'
        : `Missing ${missingEmojis.length} emoji`,
    )
  })
}