module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('sales', 'deleted', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    })
  },

  down: async queryInterface => queryInterface.removeColumn('sales', 'deleted'),
}
