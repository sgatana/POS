module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('purchases', {
      id: {
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      unitPrice: {
        type: Sequelize.FLOAT,
        field: 'unit_price',
      },
      totalPrice: {
        type: Sequelize.FLOAT,
        field: 'total_price',
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
    }),
  down: queryInterface => queryInterface.dropTable('purchases'),
}
