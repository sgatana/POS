module.exports = (sequelize, DataTypes) => {
  const purchases = sequelize.define(
    'purchases',
    {
      id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      unitPrice: {
        type: DataTypes.FLOAT,
        field: 'unit_price',
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        field: 'total_price',
      },
      productId: {
        type: DataTypes.STRING,
        field: 'category_id',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      datePurchased: {
        type: DataTypes.DATE,
        field: 'date_purchased',
      },
      deleted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'purchases',
    },
  )
  // purchases.associate = function(models) {
  //   // associations can be defined here
  // }
  return purchases
}
