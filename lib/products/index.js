const createProduct = require('./createProduct')
const fetchProducts = require('./fetchProducts')

class productRepository {
  static createProduct(params) {
    return createProduct(params)
  }

  static fetchProducts() {
    return fetchProducts()
  }
}
module.exports = productRepository
