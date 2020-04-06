// wrapper for grunt.file.write
// logs the written file to the console
module.exports = grunt => (file, content) => {
  const success = grunt.file.write(file, content)
  console.info(success
    ? `successfully wrote ${file}`
    : `could not write ${file}`)

  return success
}
