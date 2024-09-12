class Tarefas {
    init(conexao){
        this.conexao = conexao
        this.criarTabelaTarefas()
    }

    criarTabelaTarefas(){
        const sql = `
            create table if not exists tbtarefas(
	            id int auto_increment primary key,
                tarefa varchar(200) not null
            );
        `
        this.conexao.query(sql, (err) =>{
            if(err){
                console.log("Erro ao criar a tabela tarefas" + err)
                return
            }

            console.log("Tabela criada com sucesso")
        })
    }

    getTarefas(){
        const sql = `select * from tbtarefas;`

        this.conexao.query(sql, (err)=>{
            if(err){
                console.log("Erro ao obter dados")
                return
            }
            console.log("Onde eu pego os dados???")
        })
    }
}


module.exports = new Tarefas()