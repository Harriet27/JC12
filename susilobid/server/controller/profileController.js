const db = require('../database');

module.exports = {
    editProfile : (req,res) => {
        let { id } = req.params;
        let sql = `UPDATE users SET ? WHERE user_id = ${id}`;
        db.query(sql, req.body, (err,result) => {
            if (err) {
                res.status(500).send(err.message);
            }
            res.status(200).send({
                status : 'Edited',
                data : result[0],
                message : 'Edited Successfully'
            })
        })
    }
};