const express = require('express');
const router = express.Router();
const { walletController } = require('../controller');
const {
    getBalance,
    topUpBalance,
} = walletController;

router.get('/get-balance/:id', getBalance);
router.post('/top-up-balance/:id', topUpBalance);

module.exports = router;