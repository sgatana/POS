const pushId = require('pushid')
const getCategoryByName = require('./getCategoryByName')
/**
 * check if category exists
 * create category
 */
module.exports = async category => {
  category.id = pushId()
  const name = await getCategoryByName(category.name)
  if (name) {
    const error = {}
    error.status = 409
    error.message = 'category exists'
    throw error
  }
  await db.categories.create(category)
}
