const helpers = {};
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

helpers.isAdmin = (req, res, next) => {
    console.log('Dont know')
}

helpers.handleErrors = (err) => {
    let errors = {firstname: '', lastname: '', username: '', email: '', password: ''};

    if (err.code === 11000) {
        errors[Object.keys(err.keyValue)[0]] =
            `${Object.values(err.keyValue)[0]} is already registered`;
        
        return errors;
    }

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }

    return errors;
}

helpers.protectedRoute = (req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({ msg: 'Unauthorized'});
                return;
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        res.status(401).json({msg: 'Not access-token provided'})
    }
}

module.exports = helpers;
