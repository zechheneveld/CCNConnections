const mongoose = require('mongoose');

// Contact Schema
const ContactSchema = mongoose.Schema({
    group: {
        type: String,
        required:true
    },
    number: {
        type: String,
        required:true
    },
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);
