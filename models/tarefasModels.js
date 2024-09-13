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
                console.log("Deu bom então")
                resolve(resposta)
            })
        })
    }
}

module.exports = new tarefasModels()