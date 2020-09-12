const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user');
const { protectedRoute } = require('../lib/helpers');

// Login
router.post('/login', userController._login);

// Signup
router.post('/signup', userController._signup);

// Logout
router.post('/logout', userController._logout);

// Create new Role
router.post('/new-role', protectedRoute, userController.new_role);

// Get role details
router.get('/roles/:id', userController.get_role_details);


module.exports = router;