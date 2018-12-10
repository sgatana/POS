module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('categories', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    }),
  down: queryInterface => queryInterface.dropTable('categories'),
}
