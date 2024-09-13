const express = require('express')
const app = express()

//Arquivo de rotas
const router = require('./routers/index')
router(app, express)

//Arquivos de acesso a dados
const conexao = require('./infra/conexao')
const TabelaTarefas = require('./infra/Tarefas')

//Conexão com Banco de Dados
TabelaTarefas.init(conexao)

app.listen(8080)