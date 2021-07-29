const mysql = require('mysql2');

const dbPool = mysql.createPool({
    connectionLimit : 10,
    host: 'host',
    user: 'user',
    password: 'password',
    database: 'db',
	multipleStatements: true
});

module.exports = dbPool;