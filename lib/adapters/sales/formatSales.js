const getProduct = require('../../products/getProduct')

module.exports = async sales => {
  const formattedSales = Promise.all(
    sales.map(async sale => {
      const product = await getProduct(sale.productId)
      sale.name = product.name
      delete sale.productId
      return sale
    }),
  )
  return formattedSales
}
