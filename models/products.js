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
        field: 'category_id',
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      productDescription: {
        type: DataTypes.STRING,
        field: 'product_description',
      },
      unitPrice: {
        type: DataTypes.INTEGER,
        field: 'unit_price',
      },
      createAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'products',
    },
  )
  products.associate = models => {
    products.hasMany(models.orders, {
      as: 'orders',
      foreignKey: 'productId',
    })
    products.hasMany(models.purchases, {
      as: 'purchases',
      foreignKey: 'productId',
    })
  }
  return products
}
