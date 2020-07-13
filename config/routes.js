const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../app/middlewares/authentication')


const usersController = require('../app/controllers/UsersController')

router.post('/user/register', usersController.register)
router.post('/user/login', usersController.login)
router.get('/user/account', authenticateUser, usersController.account)
router.delete('/user/logout', authenticateUser, usersController.logout)



module.exports = router
