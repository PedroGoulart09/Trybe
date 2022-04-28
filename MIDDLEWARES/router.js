const express = require('express')
const router = express.Router()
const { validUserName,
    validPassword,
    validEmail,
    getUsers,
    newUser,
    login
}
    = require('./middlewares/validations')

router.get('/user', getUsers)

router.post('/user/register', validUserName, validEmail, validPassword, newUser)

router.post('/user/login', login)



module.exports = router