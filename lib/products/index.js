const createProduct = require('./createProduct')
const fetchProducts = require('./fetchProducts')
const updateProduct = require('./updateProduct')

class productRepository {
  static createProduct(params) {
    return createProduct(params)
  }

  static fetchProducts() {
    return fetchProducts()
  }

  static updateProduct(id, payload) {
    return updateProduct(id, payload)
  }
}
module.exports = productRepository
