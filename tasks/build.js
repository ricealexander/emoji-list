const formatEmojisAsMarkdown = require('../main')
const _writeFile = require('../tasks/helpers/writeFile')
const emojisJSON = require('../emojis.json')

module.exports = grunt => {
  const writeFile = _writeFile(grunt)

  grunt.registerTask('build', 'Write Emoji List Markdown file', () => {
    const markdown = formatEmojisAsMarkdown(emojisJSON)
    writeFile('dist/emoji-list.md', markdown)
  })
}
