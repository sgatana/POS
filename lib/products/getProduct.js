module.exports = async id => {
  const product = await db.products.findOne({
    where: { id },
    raw: true,
  })
  if (!product) {
    const error = {}
    error.code = 404
    error.message = 'not found'
    throw error
  }
  return product
}
