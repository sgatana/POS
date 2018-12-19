module.exports = (sequelize, DataTypes) => {
  const purchases = sequelize.define(
    'purchases',
    {
      quantity: {
        type: DataTypes.INTEGER,
      },
      productId: {
        type: DataTypes.STRING,
        field: 'product_id',
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
        defaultValue: false,
      },
    },
    {
      tableName: 'purchases',
    },
  )
  // purchases.associate = function(models) {
  //   // associations can be defined here
  // }
  purchases.removeAttribute('id')
  return purchases
}
