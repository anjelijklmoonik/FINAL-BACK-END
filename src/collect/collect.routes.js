const express = require('express')
const router = express.Router()
const collectController = require('./collect.controller')

router.get('/collect', collectController.getAllCollect)
router.get('/collect/:id', collectController.getByID)
router.post('/collect', collectController.postCollect)
router.get('/collect/:id_user', collectController.getByUser)

module.exports = router