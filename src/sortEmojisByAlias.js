const sortByEmojiAlias = ({ alias: aliasesA }, { alias: aliasesB }) => {
  const [ aliasA ] = [aliasesA].flat()
  const [ aliasB ] = [aliasesB].flat()

  if (aliasA > aliasB) return 1
  if (aliasA < aliasB) return -1
  return 0
}

module.exports = sortByEmojiAlias
