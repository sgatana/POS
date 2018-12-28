const salesRepository = require('../lib/sales')
const formatSales = require('../lib/adapters/sales/formatSales')

class salesController {
  static async listSales(req, res) {
    const { user } = req
    try {
      const sales = await salesRepository.listSales()
      const formattedSales = await formatSales(sales, user)
      res.json({ sales: formattedSales })
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}

module.exports = salesController
