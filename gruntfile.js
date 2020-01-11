const formatEmojisAsMarkdown = require('./main')
const emojisJSON = require('./emojis.json')

const DIST = './dist'
const FILE = 'dist/emoji-list.md'
const CONTENT = formatEmojisAsMarkdown(emojisJSON)

module.exports = grunt => {
  grunt.registerTask('clean', `Remove the ${DIST} directory`, () => {
    grunt.file.delete(DIST)
  })

  grunt.registerTask('write', `Write file ${FILE}`, () => {
    const success = grunt.file.write(FILE, CONTENT)
    console.log(success
      ? `successfully wrote ${FILE}`
      : `could not write ${FILE}`)
  })

  grunt.registerTask('build', ['clean', 'write'])
  grunt.registerTask('default', ['build'])
}
