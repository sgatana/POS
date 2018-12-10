module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('orders', {
      productId: {
        type: Sequelize.STRING,
        field: 'product_id',
      },
      unitCost: {
        type: Sequelize.STRING,
        field: 'unit_cost',
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      totalCost: {
        type: Sequelize.STRING,
        field: 'total_cost',
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
  down: queryInterface => queryInterface.dropTable('orders'),
}
