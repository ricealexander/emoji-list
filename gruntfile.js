module.exports = grunt => {
  grunt.loadTasks('./tasks')
  // alphabetize  ×  Alphabetize and Format emojis.json document
  // build        ×  Generate Emoji List Markdown File
  // check-api    ×  Compare against GitHub’s Emoji API
  // compare      ×  Compare against compare-emojis.json
  // validate     ×  Check emojis.json for Errors

  grunt.registerTask('clean', 'Remove the dist directory', () => {
    grunt.file.delete('./dist')
  })

  grunt.registerTask('default', ['validate', 'clean', 'build', 'check-api'])
}
