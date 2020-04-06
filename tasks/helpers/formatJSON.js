// A wrapper for JSON.stringify with preferred settings
const formatJSON = object => JSON.stringify(object, null, 2)

module.exports = formatJSON
