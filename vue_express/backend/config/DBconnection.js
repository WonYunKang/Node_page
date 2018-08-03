var mysql = require('mysql')
var info = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vue_express',
    port: 3306
}

module.exports = {
    connection : mysql.createConnection(info),
    connectionPool : mysql.createPool(info),
}