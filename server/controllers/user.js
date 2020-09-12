const jwt = require('jsonwebtoken');
const Role = require('../models/role');
const User = require('../models/user');

const {handleErrors} = require('../lib/helpers')

const jwtSecret = process.env.JWT_SECRET;

// Login
exports._login = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Verify if user exists
        const user = await User.findOne({username});
        if (!user) {
            res.status(401).json({msg: 'Incorrect username'});
            return;
        }
        // Check password
        const correctPW = user.checkPassword(password);
        if (!correctPW) {
            res.status(401).json({msg: 'Incorrect password'});
            return;
        }

        // Create payload
        const payload = {
            username: user.username,
            role: user.role
        }

        // Sign token
        const token = jwt.sign(payload, jwtSecret)

        // Send token
        res.status(200).json({
            msg: 'Authenticated',
            token: token
        })
    } catch(err) {
        console.log(err);
    }
};

// Signup
exports._signup = async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body;
    const newUser = new User({firstname, lastname, username, email, password});
    try {
        const user = await newUser.save();
        res.status(201).json({user})
    } catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({errors})
    }
};

// Logout
exports._logout = (req, res) => {
    res.send('Hello from logout');
};

// New Role
exports.new_role = async (req, res) => {
    try {
        const newRole = await new Role({name: req.body.name}).save();;
        res.status(201).json({role: newRole, msg: 'Role created'})
    } catch(err) {
        res.status(409).json({ msg: err.message})
    }
};

// Get role details
exports.get_role_details = async (req, res) => {
    console.log(req.params.id)
    try {
        const role = await Role.findById({_id: req.params.id});
        res.status(200).json({role})
    } catch(err) {
        res.send(err);
    }
}