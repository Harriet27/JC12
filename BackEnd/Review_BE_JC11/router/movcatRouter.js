const express = require('express');
const router = express.Router();
const { movcatController } = require('../controller');
const {
    getMovcat,
    addMovcat,
    editMovcat,
    deleteMovcat
} = movcatController;

router.get('/get', getMovcat);
router.post('/add', addMovcat);
router.patch('/edit/:idmovie/:idcategory', editMovcat);
router.delete('/delete/:idmovie/:idcategory', deleteMovcat);

module.exports = router;