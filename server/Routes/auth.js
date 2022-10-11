const express = require('express');
const router = express.Router();

// Controllers
const {
  login,
  register,
  //forgotPassword,
  resetPassword,
} = require('../Controllers/auth.js');

router.post('/register', register);

router.post('/login', login);

// /router.post('/forgotpassword', forgotPassword);

router.put('/passwordreset/:resetToken', resetPassword);

module.exports = router;
