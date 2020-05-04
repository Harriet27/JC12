const express= require('express');
const router = express.Router();
const { movieController } = require('../controller');
const {
    getMovie,
    addMovie,
    editMovie,
    deleteMovie
} = movieController;

router.get('/get', getMovie);
router.post('/add', addMovie);
router.patch('/edit/:id', editMovie);
router.delete('/delete/:id', deleteMovie);

module.exports = router;