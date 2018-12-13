module.exports = async () => {
  const products = await db.products.findAll({
    where: { deleted: false },
    raw: true,
  })
  if (products.length < 1 || products === 'undefined') {
    const error = {}
    error.message = 'you currently do not have products'
    error.status = 404
    throw error
  }
  return products
}
