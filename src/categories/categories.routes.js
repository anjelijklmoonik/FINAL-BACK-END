const express = require('express')
const router = express.Router()
const categoriesController = require('./categories.controller')

router.get('/seller', categoriesController.getAllCategories)
router.get('/seller/:id', categoriesController.getByID)
router.post('/seller', categoriesController.postCategories)


module.exports = router