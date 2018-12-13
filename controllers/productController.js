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
      res.status(error.status).json({ error: error.message })
    }
  }

  static async updateProduct(req, res) {
    try {
      const { body, params } = req
      const { id } = params
      const payload = Object.assign({}, body)
      await productRepository.updateProduct(id, payload)
      res.status(200).json({ message: 'product updated successfully' })
    } catch (error) {
      res.status(403).json({ error: 'error' })
    }
  }
}
module.exports = productController
