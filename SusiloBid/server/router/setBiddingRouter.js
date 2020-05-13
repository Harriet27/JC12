const express = require('express');
const router = express.Router();
const { setBiddingController } = require('../controller');
const {
    getSubmissionAuct
} = setBiddingController;

router.get('/get-submission-auct/', getSubmissionAuct);

module.exports = router;