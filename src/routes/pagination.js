const express = require('express');
const router = express.Router();
const { paginationController } = require('../controllers')

router.get('/', paginationController.pagination)

module.exports = router