// reduce emojis into a categories object,
// containing arrays of emojis in that category
const reduceEmojisByCategory = (categories, emoji) => {
  const { category } = emoji

  if (categories[category] === undefined) categories[category] = []
  categories[category].push(emoji)

  return categories
}

module.exports = reduceEmojisByCategory
