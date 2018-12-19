const getProduct = require('../../products/getProduct')

module.exports = async purchases => {
  const formattedPurchases = Promise.all(
    purchases.map(async purchase => {
      const product = await getProduct(purchase.productId)
      purchase.name = product.name
      purchase.costPrice = product.unitPrice
      purchase.totalPrice =
        parseInt(purchase.quantity, 10) * parseInt(product.unitPrice, 10)
      delete purchase.productId
      return purchase
    }),
  )
  return formattedPurchases
}
