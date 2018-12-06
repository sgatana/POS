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
    }),
  down: queryInterface => queryInterface.dropTable('products'),
}
