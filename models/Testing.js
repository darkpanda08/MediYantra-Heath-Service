const mongoose = require('mongoose');

const TestingSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    hospitalName: {
        type: String,
        required: true
    }
});

const Testing = mongoose.model('Testing', TestingSchema);

module.exports = Testing;