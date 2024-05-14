const express = require('express');
const router = express.Router();
const userPostController = require('./userPost.controller');

router.get('/postingan', userPostController.getAllPostingan);
router.get('/postingan/:id', userPostController.getPostByID);
router.post('/postingan', userPostController.postPostingan);
router.put('/postingan/:id', userPostController.updatePost);
router.delete('/postingan/:id', userPostController.deletePost);

module.exports = router;
