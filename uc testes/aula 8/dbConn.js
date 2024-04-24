const mysql = require('mysql2')

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BemVindo!',
    database: 'bdprodutos'
});

module.exports = Connection;