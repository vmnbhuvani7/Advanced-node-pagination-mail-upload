const express = require('express');
const router = express.Router();
const { uploadController } = require('../controllers')
const upload = require('../middlewares/upload')

router.post('/', upload, uploadController.upload)

module.exports = router
