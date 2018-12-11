module.exports = async () => {
  const categories = await db.categories.findAll({ raw: true })
  if (categories.length < 1 || categories === 'undefined') {
    const error = {}
    error.message = 'no categories found'
    error.status = 404
    throw error
  }
  return categories
}
