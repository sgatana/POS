module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'deleted', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    })
  },

  down: async queryInterface =>
    queryInterface.removeColumn('products', 'deleted'),
}
