const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user');

// Login
router.post('/login', userController._login);

// Signup
router.post('/signup', userController._signup);

// Logout
router.post('/logout', userController._logout);

module.exports = router;