const createProduct = require('./createProduct')
const fetchProducts = require('./fetchProducts')
const updateProduct = require('./updateProduct')
const getProduct = require('./getProduct')
const deleteProduct = require('./deleteProduct')

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

  static getProduct(id) {
    return getProduct(id)
  }

  static deleteProduct(id) {
    return deleteProduct(id)
  }
}
module.exports = productRepository
