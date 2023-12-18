const express = require('express')
const router = express.Router()


const ordercontrollers = require('../app/controllers/orderControllers')

router.get('/create', ordercontrollers.create)
router.get('/', ordercontrollers.order)

module.exports = router;