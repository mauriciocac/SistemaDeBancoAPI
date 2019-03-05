var mysql = require('mysql');

var connection = function () {
    return mysql.createConnection(
        {
            host: 'localhost',
            port: 3306,
            database: 'banco_mundial',
            user: 'root',
            password: '325325'
        }
    );
}

module.exports = function () {
    console.log('Banco de Dados iniciado... ' + Date());
    return connection;
}