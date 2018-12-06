module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    'orders',
    {
      productId: {
        type: DataTypes.STRING,
        title: 'product_id',
      },
      unitCost: {
        type: DataTypes.STRING,
        title: 'unit_cost',
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      totalCost: {
        type: DataTypes.STRING,
        title: 'total_cost',
      },
      createAt: {
        type: DataTypes.DATE,
        title: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        title: 'updated_at',
      },
    },
    {
      tableName: 'orders',
    },
  )
  // orders.associate = function(models) {
  //   // associations can be defined here
  // }
  return orders
}
