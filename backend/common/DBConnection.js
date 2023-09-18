const mysql = require('mysql');
require("dotenv").config();

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: 'campus'
    // connectionLimit: 5
});

module.exports = {
    pool : pool
};