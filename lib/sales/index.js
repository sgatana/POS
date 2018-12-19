const createSale = require('./createSale')
const listSales = require('./listSales')

class saleRepository {
  static createSale(salePayload) {
    return createSale(salePayload)
  }

  static listSales() {
    return listSales()
  }
}
module.exports = saleRepository
