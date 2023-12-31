const express = require('express')
const router = express.Router()


const ordercontrollers = require('../app/controllers/orderControllers')

router.get('/create-order-view', ordercontrollers.create)
router.get('/update-oder-view', ordercontrollers.update)
router.post('/create-order', ordercontrollers.createorder)
router.post('/update-order', ordercontrollers.updateorder)
router.post('/store', ordercontrollers.store)
// router.get('/create', ordercontrollers.create)
router.get('/', ordercontrollers.order)

module.exports = router;