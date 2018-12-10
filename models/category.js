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
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'categories',
    },
  )
  category.associate = models => {
    category.hasMany(models.products, {
      foreignKey: 'id',
      as: 'products',
    })
  }
  return category
}
