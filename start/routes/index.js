const express = require('express')
const categoryController = require('../../controllers/categoryContoller')

const router = express.Router()
router.get('/api', (req, res) => {
  res.send({ message: 'welcome to online POS' })
})
router.get('/api/categories', categoryController.fetchCategories)
router.post('/api/categories', categoryController.createCategory)
router.get('/api/categories/:id', categoryController.getCategory)

module.exports = router
