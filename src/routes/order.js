const express = require('express')
const router = express.Router()

const ordercontrollers = require('../app/controllers/OrderControllers ')

router.get('/', ordercontrollers.index)

module.exports = router;