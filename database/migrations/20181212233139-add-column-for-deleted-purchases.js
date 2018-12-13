module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('purchases', 'deleted', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    })
  },

  down: async queryInterface =>
    queryInterface.removeColumn('purchases', 'deleted'),
}
