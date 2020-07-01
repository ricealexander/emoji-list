const difference = require('lodash/difference')

const _writeFile = require('./helpers/writeFile')
const formatJSON = require('./helpers/formatJSON')
const listEmojiAliases = require('./helpers/listEmojiAliases')

const compareEmojis = require('../compare-emojis.json')
const emojisJSON    = require('../emojis.json')

module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  grunt.registerTask('compare', 'Compare against compare-emojis.json', function () {
    const emojis = listEmojiAliases(emojisJSON)
    const missingEmojis = difference(compareEmojis, emojis)

    const success = writeFile('dist/missing-emojis.json', `${formatJSON(missingEmojis)}\n`)

    if (success) {
      console.info((missingEmojis.length === 0)
        ? 'No missing emoji'
        : `Missing ${missingEmojis.length} emoji`
      )
    }
  })
}

// compare-emojis.json
// should be formatted as an array of emoji aliases:
// ["planet", "mermaid", "wizard"]
