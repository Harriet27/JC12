const { query } = require('../database');

module.exports = {
    getBalance: async (req,res) => { /* axios.get(api_url/wallet/get-balance/:id) */
        let { id } = req.params;
        let sql = `SELECT wallet FROM users WHERE user_id = ${id}`;
        try {
            let response = await query(sql);
            res.status(200).send({
                data: response[0],
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    topUpBalance: async (req,res) => { /* axios.post(api_url/wallet/top-up-balance/:id) */
        let { id } = req.params;
        let { topup } = req.body;
        console.log(id);
        let sql = `UPDATE users SET wallet = wallet + ${topup} WHERE user_id = ${id}`;
        try {
            await query(sql);
            res.status(200).send({
                status: 'Success!',
                message: 'Top Up successfully!',
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
};
