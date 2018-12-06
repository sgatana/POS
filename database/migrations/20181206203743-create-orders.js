module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('orders', {
      productId: {
        type: Sequelize.STRING,
        title: 'product_id',
      },
      unitCost: {
        type: Sequelize.STRING,
        title: 'unit_cost',
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      totalCost: {
        type: Sequelize.STRING,
        title: 'total_cost',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: queryInterface => queryInterface.dropTable('orders'),
}
