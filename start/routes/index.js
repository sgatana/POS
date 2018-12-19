const express = require('express')
const categoryController = require('../../controllers/categoryContoller')
const productController = require('../../controllers/productController')
const PurchaseController = require('../../controllers/purchaseController')
const salesController = require('../../controllers/salesController')

const router = express.Router()
router.get('/api', (req, res) => {
  res.send({ message: 'welcome to online POS' })
})
router.get('/api/categories', categoryController.fetchCategories)
router.get('/api/categories/:id', categoryController.getProductByCategory)
router.get('/api/products', productController.fetchProducts)
router.get('/api/products/:id', productController.getProduct)
router.get('/api/purchases', PurchaseController.listPurchases)
router.get('/api/sales', salesController.listSales)
router.post('/api/products', productController.createProduct)
router.post('/api/purchases', PurchaseController.createPurchases)
router.post('/api/categories', categoryController.createCategory)
router.put('/api/products/:id', productController.updateProduct)
router.delete('/api/products/:id', productController.deleteProduct)

module.exports = router
