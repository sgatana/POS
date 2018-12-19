const createPurchases = require('./createPurchases')
const listPurchases = require('./listPurchases')

class PurchaseRepository {
  static createPurchases(payload) {
    return createPurchases(payload)
  }

  static listPurchases(payload) {
    return listPurchases(payload)
  }
}
module.exports = PurchaseRepository
