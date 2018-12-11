module.exports = async id => {
  const category = await db.categories.findOne({
    where: { id },
    attributes: ['name'],
    include: [
      {
        model: db.products,
        attributes: ['name', 'quantity', 'unitPrice'],
        as: 'products',
      },
    ],
    plain: true,
  })
  return category.toJSON()
}
