module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      id: {
        unique: true,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      categoryId: {
        type: DataTypes.STRING,
        title: 'category_id',
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      productDescription: {
        type: DataTypes.STRING,
        title: 'product_description',
      },
      unitPrice: {
        type: DataTypes.INTEGER,
        title: 'unit_price',
      },
    },
    {
      tableName: 'products',
    },
  )
  // products.associate = function(models) {
  //   // associations can be defined here
  // }
  return products
}
