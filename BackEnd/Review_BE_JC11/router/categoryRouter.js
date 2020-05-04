const express = require('express');
const router = express.Router();
const { categoryController } = require('../controller');
const {
    getCategory,
    addCategory,
    editCategory,
    deleteCategory
} = categoryController;

router.get('/get', getCategory);
router.post('/add', addCategory);
router.patch('/edit/:id', editCategory);
router.delete('/delete/:id', deleteCategory);

module.exports = router;