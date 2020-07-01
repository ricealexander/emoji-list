const difference = require('lodash/difference')

const categories = require('../categories.json')
const emojisJSON = require('../emojis.json')

module.exports = grunt => {
  grunt.registerTask('validate', 'Check emojis.json for Errors', () => {
    // compare subcategories from categories.json against categories
    // in use by emojis.json
    console.info('Validating categories')
    const subcategories = categories
      .reduce((list, {groups}) => [...list, ...groups], [])

    const subcategoriesInUse = emojisJSON.reduce((list, {category}) => {
      if (!list.includes(category)) return [...list, category]
      return list
    }, [])

    // All categories used in emojis.json must be listed in categories.json
    const unregisteredCategories = difference(subcategoriesInUse, subcategories)

    if (unregisteredCategories.length > 0) {
      throw new ReferenceError((unregisteredCategories.length === 1)
        ? `Category ${unregisteredCategories[0]} does not exist in categories.json`
        : `Categories ${unregisteredCategories.join(', ')} do not exist in categories.json`
      )
    }
    console.info('All categories used in emojis.json match listed categories')


    // All categories listed in categories.json must be used by emojis.json
    const unusedCategories = difference(subcategories, subcategoriesInUse)

    if (unusedCategories.length > 0) {
      throw new Error((unregisteredCategories.length === 1)
        ? `Category ${unregisteredCategories[0]} is not referenced by emojis.json`
        : `Categories ${unregisteredCategories.join(', ')} are not referenced by emojis.json`
      )
    }
    console.info('All categories listed in categories.json are referenced')
  })
}
