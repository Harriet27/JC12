const { query } = require('../database');

module.exports = {
    getBalance: async (req,res) => { /* axios.get(api_url/wallet/get-balance/:id) */
        let { id } = req.params;
        let sql = `SELECT wallet FROM users WHERE user_id = ${id}`;
        try {
            let response = await query(sql);
            res.status(200).send({
                data: response,
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    topUpBalance: async (req,res) => { /* axios.post(api_url/wallet/top-up-balance/:id) */
        let { id } = req.params;
        let { topup } = req.body;
        let sql = `UPDATE users SET wallet = wallet + ${topup} WHERE user_id = ${id}`;
        try {
            let response = await query(sql);
            res.status(200).send({
                status: 'Success!',
                data: response,
                message: 'Top Up successfully!',
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
};
