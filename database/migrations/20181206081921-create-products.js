module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('products', {
      id: {
        unique: true,
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      categoryId: {
        type: Sequelize.STRING,
        field: 'category_id',
        references: {
          model: 'categories',
          id: 'id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      productDescription: {
        type: Sequelize.STRING,
        field: 'product_description',
      },
      unitPrice: {
        type: Sequelize.FLOAT,
        field: 'unit_price',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    }),
  down: queryInterface => queryInterface.dropTable('products'),
}
