const axios = require('axios')
const difference = require('lodash/difference')

const formatEmojisAsMarkdown = require('./main')
const listEmojiAliases = require('./src/listEmojiAliases')
const sortEmojisByAlias = require('./src/sortEmojisByAlias')
const emojisJSON = require('./emojis.json')

const DIST = './dist'
const FILE = 'dist/emoji-list.md'
const JSON_FILE = 'emojis.json'
const GITHUB_API = 'https://api.github.com/emojis'

const CONTENT = formatEmojisAsMarkdown(emojisJSON)

module.exports = grunt => {
  grunt.registerTask('clean', `Remove the ${DIST} directory`, () => {
    grunt.file.delete(DIST)
  })

  function writeFile (file, content) {
    const success = grunt.file.write(file, content)
    console.log(success
      ? `successfully wrote ${file}`
      : `could not write ${file}`)
  }

  grunt.registerTask('write', `Write file ${FILE}`, () => {
    writeFile(FILE, CONTENT)
  })

  grunt.registerTask('build', ['clean', 'write'])
  grunt.registerTask('default', ['build'])

  grunt.registerTask('alphabetize', `Re-alphabetize ${JSON_FILE}`, () => {
    const sortedList = emojisJSON.sort(sortEmojisByAlias)
    writeFile(JSON_FILE,
      JSON.stringify(sortedList, null, 2),
    )
  })

  grunt.registerTask('check-api', 'Compare emojis with Github emoji API', async function () {
    const done = this.async()
    const response = await axios.get(GITHUB_API)

    const apiEmojis = Object.keys(response.data)
    const emojis = listEmojiAliases(emojisJSON)

    const missingEmojis = difference(apiEmojis, emojis)
    console.log(missingEmojis)

    done()
  })
}
