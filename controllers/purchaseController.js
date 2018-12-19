const PurchaseRepository = require('../lib/purchases')
const formatPurchases = require('../lib/adapters/purchases/formatPurchases')

class PurchaseController {
  static async createPurchases(req, res) {
    try {
      const payload = req.body
      await PurchaseRepository.createPurchases(payload)
      res.json({})
    } catch (error) {
      res.json({ error: error.message })
    }
  }

  static async listPurchases(req, res) {
    try {
      const purchases = await PurchaseRepository.listPurchases()
      const formattedPurchases = await formatPurchases(purchases)
      res.json({ purchases: formattedPurchases })
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}
module.exports = PurchaseController
