const { db } = require('../database');

module.exports = {
    getCart: (req,res) => {
        let sql = `SELECT * FROM cart`;
        db.query(sql, (err,results) => {
            if (err) {
                res.status(500).send(err.message);
            }
            res.status(200).send({
                status: 'Success',
                data: results,
                message: 'Fetched Successfully',
            });
        });
    },
};
