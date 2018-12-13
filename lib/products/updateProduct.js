module.exports = async (id, payload) => {
  await db.products.update(payload, {
    where: { id },
  })
}
