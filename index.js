const router = require('./routers/index')
const express = require('express')
const cors = require('cors');
//Arquivos de acesso a dados
const conexao = require('./infra/conexao')
const TabelaTarefas = require('./infra/Tarefas')

const app = express()

app.use(cors());

//Arquivo de rotas
router(app, express)

//Conexão com Banco de Dados
TabelaTarefas.init(conexao)

app.listen(8080)