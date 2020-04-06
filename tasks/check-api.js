const axios = require('axios')
const difference = require('lodash/difference')

const _writeFile = require('./helpers/writeFile')
const formatJSON = require('./helpers/formatJSON')
const listEmojiAliases = require('./helpers/listEmojiAliases')

const emojisJSON = require('../emojis.json')

module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  grunt.registerTask('check-api', 'Compare against GitHub’s Emoji API', async function () {
    const done = this.async()

    const response = await axios.get('https://api.github.com/emojis')
    const apiEmojis = Object.keys(response.data)
    const emojis = listEmojiAliases(emojisJSON)

    const missingEmojis = difference(apiEmojis, emojis)
    const success = writeFile('dist/missing-emojis.json', `${formatJSON(missingEmojis)}\n`)

    if (success) {
      console.info((missingEmojis.length === 0)
        ? 'Up to date with the GitHub Emojis API'
        : `Missing ${missingEmojis.length} emoji from the GitHub Emojis API`,
      )
    }
    done()
  })
}
