const express = require('express')
const router = express.Router()


const usercontrollers = require('../app/controllers/UserControllers')

router.use('/create', usercontrollers.create)
router.post('/createuser', usercontrollers.createuser)
router.get('/', usercontrollers.user)

module.exports = router;