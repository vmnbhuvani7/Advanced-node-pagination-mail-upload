const express = require('express');
const router = express.Router();

const { blogController } = require('../controllers')
const { auth } = require('../middlewares/auth')

router.get('/getBlog/:blogId', auth, blogController.getBlog)
    .get('/getAllBlog', auth, blogController.getAllBlog)

router.post('/createBlog', auth, blogController.createBlog)

router.put('/updateBlog/:blogId', auth, blogController.updateBlog)

router.delete('/deleteBlog/:blogId', auth, blogController.deleteBlog)

module.exports = router