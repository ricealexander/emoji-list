function parseMultipleArguments (args) {
  const isSingleArray = (args.length === 1 && Array.isArray(args[0]))
  return isSingleArray ? args[0] : args
}

module.exports = parseMultipleArguments
