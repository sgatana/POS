const pushId = require('pushid')
const doesCategoryExists = require('../adapters/validators/doesCategoryExists')
/**
 * check if category exists
 * create category
 */
module.exports = async category => {
  category.id = pushId()
  const error = await doesCategoryExists(category.name)
  if (error) throw error
  await db.categories.create(category)
}
