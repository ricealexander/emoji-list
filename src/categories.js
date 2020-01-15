/* eslint-disable no-multi-spaces */

const categories = [
  { name: 'People',    displayName: 'Smileys and People'  },
  { name: 'Nature',    displayName: 'Animals and Nature'  },
  { name: 'Food',      displayName: 'Food and Drink'      },
  { name: 'Activity',  displayName: 'Activity'            },
  { name: 'Travel',    displayName: 'Travel and Places'   },
  { name: 'Objects',   displayName: 'Objects'             },
  { name: 'Symbols',   displayName: 'Symbols'             },
  { name: 'Countries', displayName: 'Flags and Countries' },
]

// [ 'People', 'Nature', 'Food', ... ]
const categoryOrder = categories.map(({name}) => name)

// { People: 'Smileys and People', Nature: 'Animals and Nature', ... }
const categoriesObject = Object.fromEntries(categories.map(Object.values))

module.exports = {
  categories,
  categoriesObject,
  categoryOrder,
}
