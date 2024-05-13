const express = require('express')
const router = express.Router()
const categoriesController = require('./categories.controller')

router.get('/categories', categoriesController.getAllCategories)
// router.get('/categories/:id', categoriesController.getByID)
router.get('/categories/:id', categoriesController.getByName)
router.post('/categories', categoriesController.postCategories)


module.exports = router