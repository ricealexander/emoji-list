const formatEmojisAsMarkdown = require('./main')
const _writeFile = require('./tasks/helpers/writeFile')
const emojisJSON    = require('./emojis.json')

module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  grunt.registerTask('clean', 'Remove the dist directory', () => {
    grunt.file.delete('./dist')
  })

  grunt.registerTask('write', 'Write Emoji List Markdown file', () => {
    const markdown = formatEmojisAsMarkdown(emojisJSON)
    writeFile('dist/emoji-list.md', markdown)
  })

  grunt.loadTasks('./tasks')
  grunt.registerTask('default', ['clean', 'write', 'check-api'])
}
