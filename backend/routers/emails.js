const express = require('express');
const EmailsController = require('../controllers/emails-controller');
const emails_controller = new EmailsController();
const router = new express.Router();

router.post('/newEmail', emails_controller.newEmail);

module.exports = router;
