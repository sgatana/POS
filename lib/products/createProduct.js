const pushId = require('pushid')
const PurchaseRepository = require('../purchases')
const getCategoryByName = require('../category/getCategoryByName')
/**
 * check if the categroy is selected
 * check if the product exists
 */
module.exports = async params => {
  const error = {}
  const product = Object.assign({}, params)
  const category = await getCategoryByName(product.category)
  if (!category) {
    error.message = 'category does not exists, please add category'
    error.status = 403
    throw error
  }
  product.id = pushId()
  product.categoryId = category.id
  await db.products.create(product)
  delete product.categoryId
  await PurchaseRepository.createPurchases(product)
}
