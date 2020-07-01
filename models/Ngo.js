const mongoose = require('mongoose');

const NgoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false,
        default: "N.A"
    }
});

const Ngo = mongoose.model('Ngo', NgoSchema);

module.exports = Ngo;