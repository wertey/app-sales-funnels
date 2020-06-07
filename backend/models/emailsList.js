const mongoose = require('mongoose');

const userEmail = new mongoose.Schema({
    email: {
        type: String,
    },
});

const Email = mongoose.model('Email', userEmail)
module.exports = Email
