// wrapper for grunt.file.write
// logs the written file to the console
module.exports = grunt => (file, content) => {
  const success = grunt.file.write(file, content)
  console.info(success
    ? `Successfully wrote ${file}`
    : `Could not write ${file}`)

  return success
}
