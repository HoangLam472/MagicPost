const express = require('express')
const router = express.Router()
// const { authenticateToken } = require('../middlewares/authMiddleware');
const usercontrollers = require('../app/controllers/UserControllers')

router.get('/find', usercontrollers.finds)
router.use('/create', usercontrollers.createUser)
router.get('/alluser', usercontrollers.user)


module.exports = router;