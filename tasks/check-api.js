const axios      = require('axios')
const difference = require('lodash/difference')

const _writeFile = require('./helpers/writeFile')
const listEmojiAliases = require('../src/listEmojiAliases')
const emojisJSON = require('../emojis.json')


module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  grunt.registerTask('check-api', 'Compare against GitHub’s Emoji API', async function () {
    const done = this.async()

    const response = await axios.get('https://api.github.com/emojis')
    const apiEmojis = Object.keys(response.data)
    const emojis = listEmojiAliases(emojisJSON)

    const missingEmojis = difference(apiEmojis, emojis)

    const JSONContent = JSON.stringify(missingEmojis, null, 2)
    const success = writeFile('dist/missing-emojis.json', `${JSONContent}\n`)

    if (success) console.info(
      (missingEmojis.length === 0)
        ? 'Up to date with the GitHub Emojis API'
        : `Missing ${missingEmojis.length} emoji from the GitHub Emojis API`,
    )
    done()
  })
}
