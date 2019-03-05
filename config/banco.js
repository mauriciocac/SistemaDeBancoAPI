var mysql = require('mysql');

var connection = function () {
    return mysql.createConnection(
        {
            host: 'localhost',
            port: 3306,
            database: 'banco_mundial',
            user: 'root',
            password: '34h6823dw'
        }
    );
}

module.exports = function () {
    console.log('Banco de Dados iniciado...');
    return connection;
}