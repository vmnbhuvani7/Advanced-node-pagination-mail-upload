const express = require('express')
const router = express.Router();

const userRoutes = require('./user')
const blogRoutes = require('./blog')
const uploadRouter = require('./upload')
const paginationRouter = require('./pagination')
const mailRouter = require('./mail')

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/upload', uploadRouter)
router.use('/pagination', paginationRouter)
router.use('/mail', mailRouter)

module.exports = router