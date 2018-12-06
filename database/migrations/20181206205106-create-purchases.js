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
        title: 'category_id',
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
  down: queryInterface => queryInterface.dropTable('purchases'),
}
