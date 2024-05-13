const express = require('express')
const router = express.Router()
const sellerController = require('./seller.controller')

router.get('/seller', sellerController.getAllSeller)
router.get('/seller/name/:name', sellerController.getByName)
router.post('/seller', sellerController.postSeller)
router.patch('/seller/:id', sellerController.updateSellerByID)
router.delete('/seller/:id', sellerController.deleteSellerByID)


module.exports = router