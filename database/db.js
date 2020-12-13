const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'sql3.freesqldatabase.com',
    user     : 'sql3381692',
    password : 'FgcZrd6KrF',
    database : 'sql3381692',
    multipleStatements : true,
    port : 3306
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;