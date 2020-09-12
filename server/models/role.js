const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please type a name']
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Role', roleSchema);