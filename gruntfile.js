const formatEmojisAsMarkdown = require('./main')
const sortEmojisByAlias = require('./src/sortEmojisByAlias')
const emojisJSON = require('./emojis.json')

const DIST = './dist'
const FILE = 'dist/emoji-list.md'
const JSON_FILE = 'emojis.json'

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

  grunt.registerTask('alphabetize', `Re-alphabetize ${JSON_FILE}`, () => {
    const sortedList = emojisJSON.sort(sortEmojisByAlias)
    writeFile(JSON_FILE,
      JSON.stringify(sortedList, null, 2),
    )
  })

  grunt.registerTask('build', ['clean', 'write'])
  grunt.registerTask('default', ['build'])
}
