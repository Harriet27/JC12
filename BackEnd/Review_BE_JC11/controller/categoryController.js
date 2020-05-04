const db = require('../database');

module.exports = {
    getCategory : async (req,res) => {
        let sql = `SELECT * FROM categories`;
        try {
            let response = await db.query(sql);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    addCategory : async (req,res) => {
        let sql = `INSERT INTO categories SET ?`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT * FROM categories`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    editCategory : async (req,res) => {
        let { id } = req.params;
        let sql = `UPDATE categories SET ? WHERE id = ${id}`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT * FROM categories`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    deleteCategory : async (req,res) => {
        let { id } = req.params;
        let sql = `DELETE FROM categories WHERE id = ${id}`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT * FROM categories`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}