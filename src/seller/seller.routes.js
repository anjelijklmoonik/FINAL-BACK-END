const express = require('express')
const router = express.Router()
const sellerController = require('./seller.controller')

router.get('/seller', sellerController.getAllSeller)
router.post('/seller', sellerController.postSeller)

module.exports = router