const listEmojiAliases = emojis => emojis
  .map(({ alias }) => [alias].flat())
  .flat()

module.exports = listEmojiAliases
