const categoryRepository = require('../lib/category')

class categoryController {
  static async createCategory(req, res) {
    try {
      const category = req.body
      await categoryRepository.createCategory(category)
      res.status(201).send({ message: 'category added successfully' })
    } catch (error) {
      res.status(error.status).json({ error: error.message })
    }
  }

  static async fetchCategories(req, res) {
    try {
      const categories = await categoryRepository.fetchCategories()
      res.json({ categories })
    } catch (error) {
      res.status(error.status).json({ error: error.message })
    }
  }

  static async getCategory(req, res) {
    try {
      const { id } = req.params
      const category = await categoryRepository.getCategory(id)
      res.json({ category })
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}
module.exports = categoryController
