

const formatEmojisAsMarkdown = require('./main')
const sortEmojisByAlias = require('./src/sortEmojisByAlias')
const _writeFile = require('./tasks/helpers/writeFile')

const emojisJSON    = require('./emojis.json')


module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  grunt.loadTasks('./tasks')

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


  grunt.registerTask('default', ['clean', 'write', 'check-api'])
}
