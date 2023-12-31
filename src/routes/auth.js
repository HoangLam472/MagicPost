const express = require('express')
const router = express.Router()
const { login } = require('../app/controllers/authControllers');
const middleware = require('../middlewares/authMiddleware')

router.post('/login', login);

// router.get('/dashboard', checkUserType('Leadership'), (req, res) => {
//     res.send('leaderDashboard'); // Render leader dashboard
//   });

module.exports = router;
