module.exports = grunt => {
  grunt.loadTasks('./tasks')

  grunt.registerTask('clean', 'Remove the dist directory', () => {
    grunt.file.delete('./dist')
  })

  grunt.registerTask('default', ['clean', 'build', 'check-api'])
}
