// const by = require('./src/by')

const sortByUnicode = ({ unicode: emojiA }, { unicode: emojiB }) => {
  // force false values to be at the bottom of the array
  if (emojiB === false) return -1
  if (emojiA === false) return 1

  // sort alphabetically
  if (emojiA > emojiB) return 1
  if (emojiA < emojiB) return -1
  return 0
}

module.exports = function (emojiJSON) {
  const sortedEmoji = emojiJSON.sort(sortByUnicode)
  return JSON.stringify(sortedEmoji, null, 2)
}
