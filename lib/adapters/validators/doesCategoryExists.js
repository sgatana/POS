const getCategoryByName = require('../../category/getCategoryByName')

module.exports = async name => {
  const error = {}
  const category = await getCategoryByName(name)
  if (!category) return false
  error.code = 409
  error.message = 'category exists'
  return error
}
