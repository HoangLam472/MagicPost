const express = require('express')
const router = express.Router()


const usercontrollers = require('../app/controllers/UserControllers')

router.use('/createemployee', usercontrollers.createepe)
router.use('/createpointmanager', usercontrollers.createpmr)
router.post('/createemployee/:pointManagerId', usercontrollers.createemployee)
router.post('/createpointmanager', usercontrollers.createpointmanager)
router.get('/', usercontrollers.user)

module.exports = router;