const productRepository = require('../lib/products')

class productController {
  static async createProduct(req, res) {
    try {
      const params = req.body
      await productRepository.createProduct(params)
      res.json({})
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message })
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
      res.status(403).json({ error: 'cannot update this product' })
    }
  }

  static async getProduct(req, res) {
    try {
      const { id } = req.params
      const product = await productRepository.getProduct(id)
      res.status(200).json({ product })
    } catch (error) {
      res.status(error.code).json({ error: error.message })
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params
      await productRepository.deleteProduct(id)
      res.status(200).json({ message: 'product successfully deleted' })
    } catch (error) {
      res.status(error.code).json({ error: error.message })
    }
  }
}
module.exports = productController
