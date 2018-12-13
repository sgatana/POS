module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    'categories',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      deleted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'categories',
    },
  )
  category.associate = models => {
    category.hasMany(models.products, {
      foreignKey: 'categoryId',
      as: 'products',
    })
  }
  return category
}
