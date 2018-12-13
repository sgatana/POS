module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('categories', 'deleted', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    })
  },

  down: async queryInterface =>
    queryInterface.removeColumn('categories', 'deleted'),
}
