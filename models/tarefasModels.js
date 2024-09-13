const conexao = require('../infra/conexao')

class tarefasModels{
    listar(){
        const sql = `select * from tbtarefas;`
        return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (err, resposta)=>{
                if(err){
                    console.log("Erro ao listar tarefas em models")
                    reject(err)
                }
                resolve(resposta)
            })
        })
    }

    criar(tarefa){
        const sql= `insert into tbtarefas (tarefa) value ('${tarefa.tarefa}');`
        return new Promise((resolve, reject) =>{
            conexao.query(sql, tarefa, (err, resposta)=>{
                if(err){
                    console.log("Erro ao tentar criar nova tarefa")
                    reject(err)
                }
                resolve(resposta)
            } )
        })
    }
}

module.exports = new tarefasModels()