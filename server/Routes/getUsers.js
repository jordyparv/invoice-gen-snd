const express = require('express');
const getUser = require('../Controllers/users.js');
const router = express.Router();

router.get('/getusers', getUser);

module.exports = router;
