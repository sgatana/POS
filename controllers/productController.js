const productRepository = require('../lib/products')

class productController {
  static async createProduct(req, res) {
    try {
      const params = req.body
      await productRepository.createProduct(params)
      res.json({})
    } catch (error) {
      res.status(error.status).json({ error: error.message })
    }
  }

  static async fetchProducts(req, res) {
    try {
      const products = await productRepository.fetchProducts()
      res.status(200).json({ products })
    } catch (error) {
      console.log(error)
      res.status(error.status).json({ error: error.message })
    }
  }
}
module.exports = productController
