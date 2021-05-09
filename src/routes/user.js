const express = require('express');
const router = express.Router();

const { userController } = require('../controllers')
const { auth } = require('../middlewares/auth')

router.get('/getLoginUser', auth, userController.getLoginUser)
    .get('/getAdminAllUser', auth, userController.getAdminAllUser)
    .get('/getAdminUser/:userId', auth, userController.getAdminUser)

router.post('/signup', userController.signUp)
    .post('/signin', userController.signIn);

router.put('/updateUser', auth, userController.updateUser)

router.delete('/deleteUser/:userId', auth, userController.deleteUser);

module.exports = router