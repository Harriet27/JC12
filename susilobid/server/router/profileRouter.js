const express = require('express');
const router = express.Router();
const { profileController } = require('../controller');
const { auth } = require('../helper/jwt');
const {
    editProfile
} = profileController;

router.patch('/edit/:id', editProfile);

module.exports = router;