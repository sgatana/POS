module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('sales', {
      productId: {
        type: Sequelize.STRING,
        field: 'product_id',
        references: {
          model: 'products',
          id: 'id',
        },
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
      dateSold: {
        type: Sequelize.DATE,
        field: 'date_sold',
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }),
  down: queryInterface => queryInterface.dropTable('sales'),
}
