const mysql = require("mysql2");
const DBPW = require('../config');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: DBPW,
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;