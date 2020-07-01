const mongoose = require('mongoose');

const HelplineSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: false,
        default: "N.A"
    },
    hospital: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    skype: {
        type: String,
        required: false
    }
});

const Helpline = mongoose.model('Helpline', HelplineSchema);

module.exports = Helpline;