module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name',
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
  down: queryInterface => queryInterface.dropTable('users'),
}
