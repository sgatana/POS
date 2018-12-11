module.exports = async id => {
  const category = await db.categories.findOne({
    where: { id },
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
