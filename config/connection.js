var mysql = require('mysql');
require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: process.env.PASSWORD,
        database: "burgersDB"
    });
};


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
})

module.exports = connection;