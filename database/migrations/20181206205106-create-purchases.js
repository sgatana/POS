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
      categoryId: {
        type: Sequelize.STRING,
        field: 'category_id',
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
  down: queryInterface => queryInterface.dropTable('purchases'),
}
