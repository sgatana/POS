module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('purchases', {
      quantity: {
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.STRING,
        field: 'product_id',
        references: {
          model: 'products',
          id: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
      datePurchased: {
        type: Sequelize.DATE,
        field: 'date_purchased',
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }),
  down: queryInterface => queryInterface.dropTable('purchases'),
}
