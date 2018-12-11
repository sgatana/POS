module.exports = async () => {
  const products = await db.products.findAll({ raw: true })
  if (products.length < 1 || products === 'undefined') {
    const error = {}
    error.message = 'no products found'
    error.status = 404
    throw error
  }
  return products
}
