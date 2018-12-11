module.exports = async name => {
  const category = await db.categories.findOne({ where: { name }, raw: true })
  return category
}
