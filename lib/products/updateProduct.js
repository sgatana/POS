const getProduct = require('./getProduct')
const PurchaseRepository = require('../purchases')
const saleRepository = require('../sales')

module.exports = async (id, payload) => {
  const product = await getProduct(id)
  payload.id = id
  if (payload.action === 'stockIn') {
    await PurchaseRepository.createPurchases(payload)
    payload.quantity =
      parseInt(product.quantity, 10) + parseInt(payload.quantity, 10)
    await db.products.update(payload, {
      where: { id },
    })
  } else if (payload.action === 'sell') {
    // create order
    await saleRepository.createSale(payload)
    payload.quantity =
      parseInt(product.quantity, 10) - parseInt(payload.quantity, 10)
    await db.products.update(
      { quantity: payload.quantity },
      {
        where: { id },
      },
    )
  }
}
