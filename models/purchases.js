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
      categoryId: {
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
