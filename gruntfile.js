const axios = require('axios')
const difference = require('lodash/difference')

const formatEmojisAsMarkdown = require('./main')
const listEmojiAliases = require('./src/listEmojiAliases')
const sortEmojisByAlias = require('./src/sortEmojisByAlias')

const emojisJSON = require('./emojis.json')

module.exports = grunt => {
  function writeFile (file, content) {
    const success = grunt.file.write(file, content)
    console.log(success
      ? `successfully wrote ${file}`
      : `could not write ${file}`)
  }

  // Remove the dist directory
  grunt.registerTask('clean', 'Remove the dist directory', () => {
    grunt.file.delete('./dist')
  })

  // Generate emoji-list.md
  grunt.registerTask('write', 'Write Emoji List Markdown file', () => {
    const markdown = formatEmojisAsMarkdown(emojisJSON)
    writeFile('dist/emoji-list.md', markdown)
  })

  // Alphabetize emojis.json
  grunt.registerTask('alphabetize', 'Re-alphabetize emojis.json', () => {
    const sortedList = emojisJSON.sort(sortEmojisByAlias)
    const JSONContent = JSON.stringify(sortedList, null, 2)
    writeFile('emojis.json', JSONContent)
  })

  // Check GitHub Emojis API
  grunt.registerTask('check-api', 'Compare emojis with Github emoji API', async function () {
    const done = this.async()

    const response = await axios.get('https://api.github.com/emojis')
    const apiEmojis = Object.keys(response.data)
    const emojis = listEmojiAliases(emojisJSON)

    const missingEmojis = difference(apiEmojis, emojis)

    writeFile(
      'dist/missing-emojis.json',
      JSON.stringify(missingEmojis, null, 2),
    )
    done()
  })

  grunt.registerTask('build', ['clean', 'write', 'check-api'])
  grunt.registerTask('default', ['build'])
}
