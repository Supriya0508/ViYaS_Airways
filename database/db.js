const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sslv1234*',
    database: 'VIYAS_AIRWAYS',
    multipleStatements: true
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
