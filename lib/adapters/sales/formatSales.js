const getProduct = require('../../products/getProduct')

module.exports = async (sales, user) => {
  const formattedSales = Promise.all(
    sales.map(async sale => {
      const product = await getProduct(sale.productId)
      sale.name = product.name
      sale.soldBy = user.name || ''
      delete sale.productId
      return sale
    }),
  )
  return formattedSales
}
