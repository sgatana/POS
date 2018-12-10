module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    'orders',
    {
      productId: {
        type: DataTypes.STRING,
        field: 'product_id',
      },
      unitCost: {
        type: DataTypes.STRING,
        field: 'unit_cost',
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      totalCost: {
        type: DataTypes.STRING,
        field: 'total_cost',
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
      tableName: 'orders',
    },
  )
  // orders.associate = function(models) {
  //   // associations can be defined here
  // }
  return orders
}
