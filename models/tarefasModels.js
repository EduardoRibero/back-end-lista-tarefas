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
            conexao.query(sql, (err, resposta)=>{
                if(err){
                    console.log("Erro ao tentar criar nova tarefa")
                    reject(err)
                }
                resolve(resposta)
            } )
        })
    }

    atualizar(tarefa, id){
        const sql= `update tbtarefas set tarefa = '${tarefa.tarefa}' where id = ${id};`
        return new Promise((resolve, reject) =>{
            conexao.query(sql, (err, resposta)=>{
                if(err){
                    console.log("Erro ao tentar criar nova tarefa")
                    reject(err)
                }
                resolve(resposta)
            } )
        })
    }

    deletar(id){
        const sql= `delete from tbtarefas where id = ${id};`
        return new Promise((resolve, reject) =>{
            conexao.query(sql, (err, resposta)=>{
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