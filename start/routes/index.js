const express = require('express')
const categoryController = require('../../controllers/categoryContoller')
const productController = require('../../controllers/productController')

const router = express.Router()
router.get('/api', (req, res) => {
  res.send({ message: 'welcome to online POS' })
})
router.get('/api/categories', categoryController.fetchCategories)
router.get('/api/categories/:id', categoryController.getProductByCategory)
router.get('/api/products', productController.fetchProducts)
router.post('/api/products', productController.createProduct)
router.post('/api/categories', categoryController.createCategory)

module.exports = router
