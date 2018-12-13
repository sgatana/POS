module.exports = async (id, payload) => {
  await db.products.dest(payload, {
    where: { id },
  })
}
