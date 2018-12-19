module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define(
    'sales',
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
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      dateSold: {
        type: DataTypes.DATE,
        field: 'date_sold',
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'sales',
    },
  )
  // sales.associate = function(models) {
  //   // associations can be defined here
  // }
  sales.removeAttribute('id')
  return sales
}
