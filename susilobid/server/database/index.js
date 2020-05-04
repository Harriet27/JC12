const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'Aldrich',
    password : 'neil1804',
    database : 'susilobid',
    port : 3306
});

module.exports = db;