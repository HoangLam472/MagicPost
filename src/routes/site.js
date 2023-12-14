const express = require('express')
const route = express.Router()

const sitecontrollers = require('../app/controllers/SiteControllers')


route.use('/', sitecontrollers.home)

module.exports = router;