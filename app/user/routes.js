const express = require('express');
const router = express.Router();
const { changeBalance } = require('./controllers')
router.put('/api/user/change-balance', changeBalance)

module.exports = router;