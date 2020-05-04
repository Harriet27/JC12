const db = require('../database');

module.exports = {
    getMovie : async (req,res) => {
        let sql = `SELECT * FROM movies`;
        try {
            let response = await db.query(sql);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    addMovie : async (req,res) => {
        let sql = `INSERT INTO movies SET ?`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT * FROM movies`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    editMovie : async (req,res) => {
        let { id } = req.params;
        let sql = `UPDATE movies SET ? WHERE id = ${id}`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT * FROM movies`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    deleteMovie : async (req,res) => {
        let { id } = req.params;
        let sql = `DELETE FROM movies WHERE id = ${id}`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT * FROM movies`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
};