module.exports = async () => {
  const sales = await db.sales.findAll({
    where: { deleted: false },
    raw: true,
    attributes: ['productId', 'unitCost', 'quantity', 'totalCost', 'dateSold'],
  })
  return sales
}
