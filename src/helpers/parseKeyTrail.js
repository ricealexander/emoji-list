const followTrail = (level, key) => (level === undefined) ? level : level[key]

function parseKeyTrail (object, string) {
  if (
    !object || typeof object !== 'object' ||
    !string || typeof string !== 'string'
  ) return undefined

  return string
    .split('.')
    .reduce(followTrail, object)
}

module.exports = parseKeyTrail
