module.exports = async () => {
  const categories = await db.categories.findAll({
    where: { deleted: false },
    raw: true,
    attributes: ['id', 'name', 'created_at'],
  })
  if (categories.length < 1 || categories === 'undefined') {
    const error = {}
    error.message = 'no categories found'
    error.status = 404
    throw error
  }
  return categories
}
