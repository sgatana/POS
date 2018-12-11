module.exports = async id => {
  const category = await db.categories.findOne({
    where: { id },
    raw: true,
  })
  return category
}
