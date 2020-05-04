const db = require('../database');

module.exports = {
    getMovcat : async (req,res) => {
        let sql = `SELECT 
            m.nama AS 'Nama Movie', 
            c.nama AS 'Nama Category',
            m.id AS 'Id Movie',
            c.id AS 'Id Category' 
            FROM movcat mc 
            JOIN movies m ON mc.idmovie = m.id 
            JOIN categories c ON c.id = mc.idcategory`;
        try {
            let response = await db.query(sql);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    addMovcat : async (req,res) => {
        let sql = `INSERT INTO movcat SET ?`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT 
                m.nama AS 'Nama Movie', 
                c.nama AS 'Nama Category' 
                FROM movcat mc 
                JOIN movies m ON mc.idmovie = m.id 
                JOIN categories c ON c.id = mc.idcategory`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    editMovcat : async (req,res) => {
        let { idmovie, idcategory } = req.params;
        let sql = `UPDATE movcat SET ? WHERE idmovie = ${idmovie} AND idcategory = ${idcategory};`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT 
                m.nama AS 'Nama Movie', 
                c.nama AS 'Nama Category' 
                FROM movcat mc 
                JOIN movies m ON mc.idmovie = m.id 
                JOIN categories c ON c.id = mc.idcategory`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    deleteMovcat : async (req,res) => {
        let { idmovie, idcategory } = req.params;
        let sql = `DELETE FROM movcat WHERE idmovie = ${idmovie} AND idcategory = ${idcategory}`;
        try {
            await db.query(sql, req.body);
            let get = `SELECT 
                m.nama AS 'Nama Movie', 
                c.nama AS 'Nama Category' 
                FROM movcat mc 
                JOIN movies m ON mc.idmovie = m.id 
                JOIN categories c ON c.id = mc.idcategory`;
            let response = await db.query(get);
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}