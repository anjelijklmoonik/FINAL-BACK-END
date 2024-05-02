const express = require('express')
const router = express.Router()
const userPostController = require('./userPost.controller')

router.get('/postingan', userPostController.getAllPostingan)
router.get('/postingan/:id', userPostController.getPostByID)
router.post('/postingan', userPostController.postPostingan)


module.exports = router