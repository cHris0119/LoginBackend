/*
    Rutas de usuarios / Auth
    host + /api/auth ...
*/

const { Router } = require('express')
const router = Router()

//*CONTROLLERS
const controllers = require('../controllers/')

router.get('/user/:userId', controllers.getUserById)

router.post('/register', controllers.register)

router.post('/login', controllers.login)

module.exports = router