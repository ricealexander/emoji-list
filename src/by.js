const parseKeyTrail = require('./parseKeyTrail')
const parseMultipleArguments = require('./parseMultipleArguments')

// simpleSort()
// accepts objects and a key
// sorts ascending by default, but key can start
// with '>' or '<' to specifically assign an order
function simpleSort (objectA, objectB, key) {
  let method = 'ascending'
  let path = key

  if (path.startsWith('>')) {
    method = 'descending'
    path = path.slice(1)
  }
  if (path.startsWith('<')) {
    method = 'ascending'
    path = path.slice(1)
  }

  const a = parseKeyTrail(objectA, path)
  const b = parseKeyTrail(objectB, path)

  if (method === 'ascending') {
    if (a > b) return 1
    if (a < b) return -1
  }
  if (method === 'descending') {
    if (a < b) return 1
    if (a > b) return -1
  }
  return 0
}

// sort()
// accepts a series of strings or custom sorting functions
// sorts on all conditions passed in order

// for example <array>.sort(sort('contribution', 'name', 'age'))
// would sort array first by contribution, then by name, then by age

function by (...args) {
  const keys = parseMultipleArguments(args)

  return (objectA, objectB) => {
    function nextSortingCondition (index = 0) {
      const key = keys[index]
      let sortResult = 0

      if (typeof key === 'string') {
        sortResult = simpleSort(objectA, objectB, key)
      }
      if (typeof key === 'function') {
        sortResult = key(objectA, objectB)
      }

      if (sortResult === 1 || sortResult === -1) {
        return sortResult
      }

      if (index < keys.length) {
        return nextSortingCondition(index + 1)
      }
      return 0
    }

    return nextSortingCondition()
  }
}

module.exports = by
