const express = require('express')
const router = express.Router()
const buyerController = require('./buyer.controller')

router.get('/buyer', buyerController.getAllBuyer)
router.get('/buyer/:id', buyerController.getByID)
router.post('/buyer', buyerController.postBuyer)
router.get('/buyer/name/:name', buyerController.getByName)

module.exports = router