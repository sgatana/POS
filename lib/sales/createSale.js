module.exports = async salePayload => {
  salePayload.productId = salePayload.id
  salePayload.dateSold = Date.now()
  salePayload.totalCost =
    parseInt(salePayload.quantity, 10) * parseInt(salePayload.unitCost, 10)
  await db.sales.create(salePayload)
}
