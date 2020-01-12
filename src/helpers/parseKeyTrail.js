function parseKeyTrail (object, string) {
  if (!object || typeof object !== 'object' ||
      !string || typeof string !== 'string'
  ) return undefined

  function followTrail (objectLevel, key) {
    if (objectLevel === undefined || objectLevel[key] === undefined) {
      return undefined
    }
    return objectLevel[key]
  }

  const trail = string.split('.')
  return trail.reduce((a, b) => followTrail(a, b), object)
}

module.exports = parseKeyTrail
