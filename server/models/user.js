const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Please include your Firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Please include your Lastname']
    },
    username: {
        type: String,
        required: [true, 'Please choose a Username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please include a valid email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please choose a password']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    role: {
        type: ObjectId,
        default: '5f5cd713efc12f2db48cfe4f',
        ref: 'Role'
    }
});

// User methods
userSchema.methods = {
    checkPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
    },

    hashPassword: function(password) {
        return bcrypt.hashSync(password, 10);
    }
};

userSchema.pre('save', function(next) {
    if (!this.password) {
        next();
    } else {
        this.password = this.hashPassword(this.password);
        next();
    }
});


module.exports = model('User', userSchema);