class Tarefas {
    init(conexao){
        this.conexao = conexao
        console.log(this.conexao)
        this.criarTabelaTarefas()
        // this.conexao.connect((err) => {
        //     if (err) {
        //         console.log(err)
        //       console.error('Erro ao conectar ao banco de dados:', err.message);
        //       return;
        //     }
        //     console.log('Conexão estabelecida com sucesso!');
        //   })
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

        })
    }

}


module.exports = new Tarefas()