// emojis can have multiple aliases,
// but each alias should be treated as their own emoji
const expandAliases = (emojis, {alias: tags, category, unicode}) => {
  const aliases = [tags].flat()

  aliases.forEach(alias => {
    const emoji = { alias, category, unicode }
    emojis.push(emoji)
  })

  return emojis
}

module.exports = expandAliases
