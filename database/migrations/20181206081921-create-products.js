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
        title: 'category_id',
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      productDescription: {
        type: Sequelize.STRING,
        title: 'product_description',
      },
      unitPrice: {
        type: Sequelize.INTEGER,
        title: 'unit_price',
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
