module.exports = async () => {
  const orders = await db.purchases.findAll({
    where: { deleted: false },
    raw: true,
    attributes: ['productId', 'datePurchased', 'quantity'],
  })
  return orders
}
