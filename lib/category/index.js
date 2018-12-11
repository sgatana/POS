const createCategory = require('./createCategory')
const fetchCategories = require('./fetchCategories')
const getCategoryByName = require('./getCategoryByName')
const getCategory = require('./getProductsByCategory')

class categoryRepository {
  static createCategory(category) {
    return createCategory(category)
  }

  static fetchCategories() {
    return fetchCategories()
  }

  static getCategoryByName(name) {
    return getCategoryByName(name)
  }

  static getCategory(id) {
    return getCategory(id)
  }
}
module.exports = categoryRepository
