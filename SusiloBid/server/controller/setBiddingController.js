const { dba } = require('../database');

module.exports = {
    getSubmissionAuct : async (req, res) => {
        let sql = `SELECT * FROM product ORDER BY submission_time`;
        try {
            let response = await dba(sql);
            res.status(200).send(response);
        } catch(err) {
            res.status(500).send(err.message);
        };
    }
};