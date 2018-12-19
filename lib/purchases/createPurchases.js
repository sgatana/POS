const _ = require('lodash')

const orderFields = ['quantity', 'productId', 'datePurchased']
module.exports = async payload => {
  const orders = _.pick(payload, orderFields)
  orders.productId = payload.id
  orders.datePurchased = Date.now()
  await db.purchases.create(orders)
}
