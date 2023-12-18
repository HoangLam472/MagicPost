const express = require('express')
const router = express.Router()

const sitecontrollers = require('../app/controllers/SiteControllers')

router.use('/home', sitecontrollers.home)

module.exports = router;