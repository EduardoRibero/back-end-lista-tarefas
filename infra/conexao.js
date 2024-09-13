const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: '192.168.0.166',
    port: 3306,
    user: "root",
    password: "admin",
    database: "db_tarefas"
})

module.exports = conexao