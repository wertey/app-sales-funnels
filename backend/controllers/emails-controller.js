const Emails = require('../models/emailsList');
const mongoose = require('mongoose');
const Email = mongoose.model('Email');

class EmailsController {
    constructor(){}
    newEmail = async (req, res) => {
        console.log(' req.body',  req.body.email)
        const item = new Email()
            item.email = req.body.email,
        item.save()
    };
}

module.exports = EmailsController;
