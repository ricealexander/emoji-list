
const difference = require('lodash/difference')

const formatEmojisAsMarkdown = require('./main')
const listEmojiAliases  = require('./src/listEmojiAliases')
const sortEmojisByAlias = require('./src/sortEmojisByAlias')

const emojisJSON    = require('./emojis.json')
const compareEmojis = require('./compare-emojis.json')


module.exports = grunt => {
  grunt.loadTasks('./tasks')

  function writeFile (file, content) {
    const success = grunt.file.write(file, content)
    console.info(success
      ? `successfully wrote ${file}`
      : `could not write ${file}`)

    return success
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
    writeFile('emojis.json', `${JSONContent}\n`)
  })

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

  grunt.registerTask('default', ['clean', 'write', 'check-api'])
}
