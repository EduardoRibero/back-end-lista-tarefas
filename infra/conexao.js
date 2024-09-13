const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'ip-72-14-185-104.cloudezapp.io',
    port: 3306,
    user: "db_tarefas",
    password: "o5<#$l+P",
    database: "db_tarefas"
})

module.exports = conexao